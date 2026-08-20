import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.webp";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/impact", label: "Impact" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);
        ticking = false;
      });
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,box-shadow,border-color] duration-500 will-change-[background-color,backdrop-filter,box-shadow,border-color] ${
        isScrolled
          ? "bg-background/95 lg:backdrop-blur-md shadow-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="rounded-xl bg-foreground px-3 py-1.5 shadow-md ring-1 ring-border/40 transition-transform duration-300 group-hover:scale-105">
              <img
                src={logo}
                alt="GCN — Global Catalyst Network"
                width={45}
                height={60}
                className="h-11 w-auto"
              />
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className={`text-sm font-medium tracking-wide relative group transition-colors duration-300 ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link to="/join" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <Button variant="gold" size="lg">
                Join the Network
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          className={`lg:hidden absolute top-20 left-0 right-0 bg-background border-b border-border transition-all duration-300 ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`text-base font-medium py-2 transition-colors duration-300 ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/join" onClick={() => {
              setIsMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}>
              <Button variant="gold" size="lg" className="mt-4 w-full">
                Join the Network
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
