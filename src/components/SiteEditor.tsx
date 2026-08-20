import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ADMIN_KEY = "gcn-admin-unlocked";
const CONTENT_KEY = "gcn-content-overrides";
const CODE = "abdullahboss";

type Overrides = Record<string, Record<string, string>>;

const readOverrides = (): Overrides => {
  try {
    return JSON.parse(localStorage.getItem(CONTENT_KEY) || "{}") as Overrides;
  } catch {
    return {};
  }
};

const writeOverrides = (data: Overrides) => {
  try {
    localStorage.setItem(CONTENT_KEY, JSON.stringify(data));
  } catch {
    /* quota */
  }
};

/** Stable-ish DOM path for an element, relative to <body>. */
const getPath = (el: Element): string => {
  const parts: string[] = [];
  let node: Element | null = el;
  while (node && node !== document.body) {
    const parent: Element | null = node.parentElement;
    if (!parent) break;
    const tag = node.tagName.toLowerCase();
    const sameTag = Array.from(parent.children).filter(
      (c) => c.tagName === node!.tagName
    );
    parts.unshift(`${tag}:${sameTag.indexOf(node)}`);
    node = parent;
  }
  return parts.join(">");
};

const getByPath = (path: string): Element | null => {
  let current: Element | null = document.body;
  for (const part of path.split(">")) {
    if (!current) return null;
    const [tag, idxRaw] = part.split(":");
    const idx = Number(idxRaw);
    const matches = Array.from(current.children).filter(
      (c) => c.tagName.toLowerCase() === tag
    );
    current = matches[idx] ?? null;
  }
  return current;
};

const EDITABLE_SELECTOR =
  "h1,h2,h3,h4,h5,h6,p,span,li,strong,em,label,td,th,div,figcaption,blockquote";

const INLINE_TAGS = new Set(["SPAN", "STRONG", "EM", "B", "I", "U", "SMALL", "BR"]);

/** Elements holding plain text (leaf, or a wrapper of inline text only). */
const isTextLeaf = (el: Element) => {
  if (el.closest("[data-site-editor]")) return false;
  // Never lock up navigation: links/buttons stay clickable while editing
  if (el.closest("a,button,[role='button']")) return false;
  if (el.closest("header,nav,footer")) return false;
  if (el.closest("[data-gcn-editable]") && !el.hasAttribute("data-gcn-editable"))
    return false;
  const children = Array.from(el.children);
  const inlineOnly = children.every(
    (c) => INLINE_TAGS.has(c.tagName) && c.children.length === 0
  );
  if (!inlineOnly) return false;
  const text = (el.textContent || "").trim();
  return text.length > 0 && text.length < 2000;
};

const SiteEditor = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [unlocked, setUnlocked] = useState(false);
  const [editing, setEditing] = useState(false);
  const [savedCount, setSavedCount] = useState(0);
  const buffer = useRef("");

  // Restore unlock state, and keep it in sync with the Team page code box
  useEffect(() => {
    const sync = () => setUnlocked(localStorage.getItem(ADMIN_KEY) === "1");
    sync();
    window.addEventListener("storage", sync);
    window.addEventListener("gcn-admin-change", sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("gcn-admin-change", sync);
    };
  }, []);

  // Secret keystroke unlock: type the code anywhere on the site
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && /input|textarea/i.test(target.tagName)) return;
      if (target?.isContentEditable) return;
      if (e.key.length !== 1) return;
      buffer.current = (buffer.current + e.key.toLowerCase()).slice(-CODE.length);
      if (buffer.current === CODE) {
        localStorage.setItem(ADMIN_KEY, "1");
        setUnlocked(true);
        setEditing(true);
        buffer.current = "";
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Apply saved text overrides on every route / DOM change
  const applyOverrides = useCallback(() => {
    const all = readOverrides();
    const page = all[location.pathname];
    if (!page) return;
    let applied = 0;
    for (const [path, text] of Object.entries(page)) {
      const el = getByPath(path);
      if (el && el.textContent !== text) {
        el.textContent = text;
        applied++;
      }
    }
    return applied;
  }, [location.pathname]);

  useEffect(() => {
    // Nothing saved for this route → skip the observer entirely (perf)
    const all = readOverrides();
    if (!all[location.pathname] || Object.keys(all[location.pathname]).length === 0) {
      return;
    }
    const run = () => applyOverrides();
    run();
    const timers = [200, 900].map((t) => window.setTimeout(run, t));
    return () => timers.forEach(window.clearTimeout);
  }, [applyOverrides, location.pathname]);

  // Toggle contenteditable on every text leaf while editing
  useEffect(() => {
    if (!editing) {
      document
        .querySelectorAll<HTMLElement>("[data-gcn-editable]")
        .forEach((el) => {
          el.removeAttribute("contenteditable");
          el.removeAttribute("data-gcn-editable");
          el.style.outline = "";
          el.style.borderRadius = "";
        });
      return;
    }

    const enable = () => {
      document.querySelectorAll<HTMLElement>(EDITABLE_SELECTOR).forEach((el) => {
        if (!isTextLeaf(el) || el.hasAttribute("data-gcn-editable")) return;
        el.setAttribute("contenteditable", "true");
        el.setAttribute("data-gcn-editable", "true");
        el.setAttribute("spellcheck", "false");
        el.style.outline = "1px dashed hsl(var(--primary) / 0.45)";
        el.style.borderRadius = "4px";
      });
    };

    enable();
    const interval = window.setInterval(enable, 2000);

    const onBlur = (e: FocusEvent) => {
      const el = e.target as HTMLElement | null;
      if (!el || !el.hasAttribute?.("data-gcn-editable")) return;
      const path = getPath(el);
      const text = (el.textContent || "").trim();
      const all = readOverrides();
      all[location.pathname] = { ...(all[location.pathname] || {}), [path]: text };
      writeOverrides(all);
      setSavedCount((c) => c + 1);
    };

    const onKeyDown = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null;
      if (!el?.hasAttribute?.("data-gcn-editable")) return;
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        el.blur();
      }
      if (e.key === "Escape") el.blur();
    };

    document.addEventListener("focusout", onBlur, true);
    document.addEventListener("keydown", onKeyDown, true);
    return () => {
      window.clearInterval(interval);
      document.removeEventListener("focusout", onBlur, true);
      document.removeEventListener("keydown", onKeyDown, true);
    };
  }, [editing, location.pathname]);

  if (!unlocked) return null;

  return (
    <div
      data-site-editor
      className="fixed bottom-4 right-4 z-[100] flex items-center gap-2 rounded-full border border-primary/40 bg-card/95 px-3 py-2 shadow-lg backdrop-blur-md will-change-[transform,opacity,backdrop-filter]"
    >
      <span className="text-[11px] text-muted-foreground">
        {editing ? `Editing${savedCount ? ` · ${savedCount} saved` : ""}` : "Admin"}
      </span>
      <button
        type="button"
        onClick={() => navigate("/")}
        className="rounded-full border border-border px-3 py-1 text-[11px] text-muted-foreground"
      >
        Home
      </button>
      <button
        type="button"
        onClick={() => setEditing((v) => !v)}
        className="rounded-full bg-primary px-3 py-1 text-[11px] font-medium text-primary-foreground"
      >
        {editing ? "Done" : "Edit text"}
      </button>
      <button
        type="button"
        onClick={() => {
          if (!window.confirm("Reset all edited text on this page?")) return;
          const all = readOverrides();
          delete all[location.pathname];
          writeOverrides(all);
          window.location.reload();
        }}
        className="rounded-full border border-border px-3 py-1 text-[11px] text-muted-foreground"
      >
        Reset page
      </button>
      <button
        type="button"
        onClick={() => {
          localStorage.removeItem(ADMIN_KEY);
          setEditing(false);
          setUnlocked(false);
          window.dispatchEvent(new Event("gcn-admin-change"));
        }}
        className="text-[11px] text-muted-foreground/70"
      >
        Lock
      </button>
    </div>
  );
};

export default SiteEditor;
