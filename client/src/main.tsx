import { createRoot } from "react-dom/client";
import { lazy, Suspense, StrictMode, useEffect } from "react";
import "./index.css";
import "./styles/premium-effects.css";
import "./styles/smooth-animations.css";
import { enableSmoothScrolling, initSmoothScrolling } from "./utils/smoothScroll";
import { initImageLoading } from "./utils/imageLoading";
import { initAnimationOptimizer } from "./utils/animationOptimizer";

// Lazy load the App component
const App = lazy(() => import("./App"));

// Initialize scrolling behavior
function AppWithScrolling() {
  useEffect(() => {
    // Enable smooth scrolling
    enableSmoothScrolling();
    
    // Initialize anchor link smooth scrolling with a header offset of 80px
    initSmoothScrolling(80);
    
    // Initialize image loading effects
    initImageLoading();
    
    // Initialize animation optimizations
    initAnimationOptimizer();
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
