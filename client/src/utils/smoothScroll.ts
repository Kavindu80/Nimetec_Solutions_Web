/**
 * Smooth scroll utility for a better user experience
 * This provides smooth scrolling behavior when navigating between sections 
 * or when using anchor links
 */

// Smoothly scrolls to a specific element by ID
export function scrollToElement(elementId: string, offset = 0): void {
  const element = document.getElementById(elementId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
}

// Smoothly scrolls to a specific position
export function scrollToPosition(position: number): void {
  window.scrollTo({
    top: position,
    behavior: 'smooth',
  });
}

// Smoothly scrolls to the top of the page
export function scrollToTop(): void {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

// Initialize smooth scroll behavior for all anchor links on the page
export function initSmoothScrolling(headerOffset = 80): void {
  document.addEventListener('DOMContentLoaded', () => {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1);
        if (targetId) {
          scrollToElement(targetId, headerOffset);
        }
      });
    });
  });
}

// Enables smooth scrolling for the entire page
export function enableSmoothScrolling(): void {
  // Apply smooth scrolling to the document body
  document.documentElement.style.scrollBehavior = 'smooth';
  
  // Fix for iOS Safari and some mobile browsers
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    (document.body.style as any)['-webkit-overflow-scrolling'] = 'touch';
  }
} 