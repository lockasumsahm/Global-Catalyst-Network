import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense, useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import SiteEditor from "./components/SiteEditor";

// Eager load Index for fastest first paint
import Index from "./pages/Index";

// Lazy load all other pages
const About = lazy(() => import("./pages/About"));
const Programs = lazy(() => import("./pages/Programs"));
const Impact = lazy(() => import("./pages/Impact"));
const Team = lazy(() => import("./pages/Team"));
const Join = lazy(() => import("./pages/Join"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Warm up other route chunks once the browser is idle so navigation is instant.
const prefetchRoutes = () => {
  import("./pages/About");
  import("./pages/Programs");
  import("./pages/Impact");
  import("./pages/Team");
  import("./pages/Join");
  import("./pages/Contact");
};

const RoutePrefetcher = () => {
  useEffect(() => {
    const w = window as typeof window & {
      requestIdleCallback?: (cb: () => void) => number;
    };
    if (w.requestIdleCallback) {
      w.requestIdleCallback(prefetchRoutes);
    } else {
      const t = setTimeout(prefetchRoutes, 2000);
      return () => clearTimeout(t);
    }
  }, []);
  return null;
};

const PageLoader = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="w-10 h-10 border-3 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <RoutePrefetcher />
          <SiteEditor />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/impact" element={<Impact />} />
              <Route path="/team" element={<Team />} />
              <Route path="/join" element={<Join />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
