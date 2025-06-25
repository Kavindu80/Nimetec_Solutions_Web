/**
 * Image loading utilities for smoother image transitions
 */

// Preload a single image
export function preloadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

// Preload multiple images
export function preloadImages(sources: string[]): Promise<HTMLImageElement[]> {
  return Promise.all(sources.map(preloadImage));
}

// Apply smooth image loading with lazy loading and fade-in effect
export function setupLazyImageLoading(): void {
  // If the browser supports IntersectionObserver, use it for lazy loading
  if ('IntersectionObserver' in window) {
    const lazyImageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target as HTMLImageElement;
          
          // Get the source from data-src attribute
          const src = lazyImage.dataset.src;
          
          if (src) {
            // Start loading the image
            lazyImage.src = src;
            
            // Add transition class
            lazyImage.classList.add('image-fade-in');
            
            // When the image is loaded, add the loaded class to trigger the transition
            lazyImage.onload = () => {
              lazyImage.classList.add('loaded');
              // Remove the data-src attribute to avoid re-processing
              delete lazyImage.dataset.src;
            };
            
            // Stop observing the image
            observer.unobserve(lazyImage);
          }
        }
      });
    }, {
      rootMargin: '100px 0px', // Start loading images when they're 100px from entering the viewport
      threshold: 0.01 // Trigger when at least 1% of the image is visible
    });
    
    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
      lazyImageObserver.observe(img);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    document.querySelectorAll('img[data-src]').forEach(img => {
      const lazyImage = img as HTMLImageElement;
      const src = lazyImage.dataset.src;
      
      if (src) {
        lazyImage.src = src;
        lazyImage.classList.add('image-fade-in');
        lazyImage.onload = () => {
          lazyImage.classList.add('loaded');
          delete lazyImage.dataset.src;
        };
      }
    });
  }
}

// Initialize the image loading system
export function initImageLoading(): void {
  // Run the setup on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupLazyImageLoading);
  } else {
    // DOM is already ready, call the function directly
    setupLazyImageLoading();
  }
  
  // Re-run the setup when new content is loaded via AJAX
  // This can be called manually after loading new content
} 