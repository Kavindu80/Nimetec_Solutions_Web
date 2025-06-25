import { createRoot } from "react-dom/client";
import { lazy, Suspense, StrictMode, useEffect } from "react";
import "./index.css";
import "./styles/premium-effects.css";
import "./styles/smooth-animations.css";
import { enableSmoothScrolling, initSmoothScrolling } from "./utils/smoothScroll";
import { setupOptimizedImageLoading } from "./utils/imageLoading";
import { initAnimationOptimizer } from "./utils/animationOptimizer";

// Add JS detection class for CSS fallbacks
document.documentElement.classList.add('js');

// Lazy load the App component
const App = lazy(() => import("./App"));

// Initialize scrolling behavior
function AppWithScrolling() {
  useEffect(() => {
    // Enable smooth scrolling
    enableSmoothScrolling();
    
    // Initialize anchor link smooth scrolling with a header offset of 80px
    initSmoothScrolling(80);
    
    // Initialize enhanced image loading with optimizations for Vercel deployment
    setupOptimizedImageLoading();
    
    // Initialize animation optimizations
    initAnimationOptimizer();
    
    // Set up navigation recovery mechanism
    const ensureNavigationVisible = () => {
      const nav = document.querySelector('.fixed-nav');
      if (nav) {
        (nav as HTMLElement).style.transform = 'translateY(0)';
        (nav as HTMLElement).style.opacity = '1';
      }
    };
    
    // Ensure navigation is visible on these events
    window.addEventListener('resize', ensureNavigationVisible, { passive: true });
    window.addEventListener('orientationchange', ensureNavigationVisible, { passive: true });
    
    // Add keyboard shortcut (Alt+N) to show navigation in case it gets stuck
    const navKeyHandler = (e: KeyboardEvent) => {
      if (e.altKey && e.key === 'n') {
        ensureNavigationVisible();
      }
    };
    window.addEventListener('keydown', navKeyHandler);
    
    // Set up periodic check to ensure navigation is accessible
    const navCheckInterval = setInterval(ensureNavigationVisible, 5000);
    
    return () => {
      window.removeEventListener('resize', ensureNavigationVisible);
      window.removeEventListener('orientationchange', ensureNavigationVisible);
      window.removeEventListener('keydown', navKeyHandler);
      clearInterval(navCheckInterval);
    };
  }, []);

  return <App />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading...</div>}>
      <AppWithScrolling />
    </Suspense>
  </StrictMode>
);
