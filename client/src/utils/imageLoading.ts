/**
 * Image loading optimization utility
 * Enhances image loading across the site
 */

// Helper to check if running in production
const isProduction = () => {
  return import.meta.env.PROD || window.location.hostname !== 'localhost';
};

// Initialize lazy loading for images
export function initImageLoading() {
  // Only initialize if 'lazysizes' is used in the project
  if (typeof window !== 'undefined') {
    // Add lazyload class to images that don't already have it
    document.querySelectorAll('img:not(.lazyload)').forEach((img: Element) => {
      const imgElement = img as HTMLImageElement;
      if (!imgElement.classList.contains('lazyload') && 
          !imgElement.src.includes('data:image') && 
          !imgElement.src.includes('blob:')) {
        
        // Store original src
        const originalSrc = imgElement.getAttribute('src');
        if (originalSrc) {
          imgElement.setAttribute('data-src', originalSrc);
          imgElement.classList.add('lazyload');
          // Set a lightweight placeholder until the image loads
          imgElement.setAttribute('src', 'data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1 1\'%3E%3C/svg%3E');
        }
      }
    });

    // Fix image paths for Vercel deployment
    fixImagePathsForProduction();
  }
}

// Fix paths for images when deployed to production
export function fixImagePathsForProduction() {
  if (isProduction()) {
    // In production, ensure image paths are correct
    document.querySelectorAll('img[data-src]').forEach(img => {
      const dataSrc = img.getAttribute('data-src');
      if (dataSrc && dataSrc.startsWith('/assets/') && !dataSrc.startsWith('https://')) {
        // Update relative paths to use the correct base path
        img.setAttribute('data-src', dataSrc);
      }
    });

    // Also check background images in style attributes
    document.querySelectorAll('[style*="background-image"]').forEach(el => {
      const style = el.getAttribute('style');
      if (style && style.includes('/assets/') && !style.includes('https://')) {
        // Fix background image URLs
        const fixedStyle = style.replace(
          /background-image:\s*url\(['"]?(\/assets\/[^'"\)]+)['"]?\)/g, 
          (match, path) => `background-image: url("${path}")`
        );
        el.setAttribute('style', fixedStyle);
      }
    });
  }
}

// Register a MutationObserver to handle dynamically added content
export function registerImageObserver() {
  if (typeof window !== 'undefined' && 'MutationObserver' in window) {
    const observer = new MutationObserver((mutations) => {
      let shouldFixPaths = false;
      
      mutations.forEach(mutation => {
        if (mutation.type === 'childList' && mutation.addedNodes.length) {
          mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1) { // Element node
              const element = node as Element;
              
              // Check for new images
              element.querySelectorAll('img:not(.lazyload)').forEach((img: Element) => {
                const imgElement = img as HTMLImageElement;
                if (!imgElement.classList.contains('lazyload') && 
                    !imgElement.src.includes('data:image') && 
                    !imgElement.src.includes('blob:')) {
                  const originalSrc = imgElement.getAttribute('src');
                  if (originalSrc) {
                    imgElement.setAttribute('data-src', originalSrc);
                    imgElement.classList.add('lazyload');
                    imgElement.setAttribute('src', 'data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1 1\'%3E%3C/svg%3E');
                  }
                }
              });
              
              shouldFixPaths = true;
            }
          });
        }
      });
      
      if (shouldFixPaths) {
        fixImagePathsForProduction();
      }
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    return observer;
  }
  
  return null;
}

// Export a unified function to handle everything
export function setupOptimizedImageLoading() {
  initImageLoading();
  const observer = registerImageObserver();
  
  // Periodically check for new images
  const intervalId = setInterval(() => {
    fixImagePathsForProduction();
  }, 3000);
  
  // Return a cleanup function
  return () => {
    observer?.disconnect();
    clearInterval(intervalId);
  };
}

// Add export for direct use in components
export default {
  initImageLoading,
  fixImagePathsForProduction,
  registerImageObserver,
  setupOptimizedImageLoading
}; 