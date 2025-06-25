/**
 * Animation optimizer utility
 * Improves performance of animations across the website
 */

// Function to optimize animations based on device capabilities
export function optimizeAnimations(): void {
  // Check if device is low-powered
  const isLowPoweredDevice = () => {
    // Check for mobile devices that typically have less powerful GPUs
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Check if device has limited RAM (for devices that support navigator.deviceMemory)
    const hasLimitedMemory = 'deviceMemory' in navigator && (navigator as any).deviceMemory < 4;
    
    // Check if device has battery API and is low on battery
    const hasLowBattery = 'getBattery' in navigator && 
      (navigator as any).getBattery().then((battery: any) => battery.level < 0.15);
    
    return isMobile || hasLimitedMemory || hasLowBattery;
  };

  // Reduce animation complexity for low-powered devices
  if (isLowPoweredDevice()) {
    // Add a class to the document to simplify animations via CSS
    document.documentElement.classList.add('reduced-motion');
    
    // Reduce the number of animated elements
    const animationElements = document.querySelectorAll('.gpu-accelerated, .will-change-transform, .will-change-opacity');
    animationElements.forEach(element => {
      if (Math.random() > 0.5) { // Only animate 50% of elements on low-powered devices
        element.classList.remove('gpu-accelerated', 'will-change-transform', 'will-change-opacity');
      }
    });
  }
  
  // Enable will-change property only when needed
  const optimizeWillChange = () => {
    const animatedElements = document.querySelectorAll('.will-change-transform, .will-change-opacity');
    
    animatedElements.forEach(element => {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(entry => {
            // Only apply will-change when element is near viewport
            if (entry.isIntersecting) {
              // Keep the will-change property
            } else {
              // Remove will-change when element is far from viewport to free up resources
              if (element.classList.contains('will-change-transform')) {
                element.classList.remove('will-change-transform');
                element.classList.add('will-change-transform-disabled');
              }
              
              if (element.classList.contains('will-change-opacity')) {
                element.classList.remove('will-change-opacity');
                element.classList.add('will-change-opacity-disabled');
              }
            }
          });
        },
        { rootMargin: '100px' }
      );
      
      observer.observe(element);
    });
  };
  
  // Initialize will-change optimization
  optimizeWillChange();
  
  // Handle user preference for reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('reduced-motion');
  }
}

// Set up a high-performance animation frame using requestAnimationFrame
export function createSmoothAnimationFrame(callback: FrameRequestCallback): () => void {
  let animationFrameId: number | null = null;
  let lastTimestamp = 0;
  const targetFPS = 60; // Target frame rate
  const frameInterval = 1000 / targetFPS;
  
  // The animation loop
  const animate = (timestamp: number) => {
    animationFrameId = requestAnimationFrame(animate);
    
    // Skip frames to maintain consistent frame rate
    const elapsed = timestamp - lastTimestamp;
    if (elapsed > frameInterval) {
      lastTimestamp = timestamp - (elapsed % frameInterval);
      callback(timestamp);
    }
  };
  
  // Start the animation
  animationFrameId = requestAnimationFrame(animate);
  
  // Return a function to cancel the animation
  return () => {
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId);
    }
  };
}

// Initialize all animation optimizations
export function initAnimationOptimizer(): void {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', optimizeAnimations);
  } else {
    optimizeAnimations();
  }
  
  // Re-run optimizations when window is resized (device orientation changes, etc.)
  window.addEventListener('resize', optimizeAnimations, { passive: true });
} 