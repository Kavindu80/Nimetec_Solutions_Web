/**
 * Image loading utilities for optimal performance
 */

import { getAssetPath } from '../lib/utils';

// Map for tracking loaded images to prevent duplicate loading
const loadedImages = new Map<string, boolean>();

/**
 * Optimized image path helper that handles both local and remote images
 */
export function getOptimizedImagePath(imagePath: string): string {
  // For external images, return as is
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  
  // Check if it's already an optimized webp
  if (imagePath.includes('/optimized/') && imagePath.endsWith('.webp')) {
    return getAssetPath(imagePath);
  }
  
  // Convert to optimized webp path if available
  const basePath = imagePath.replace(/\.(jpg|jpeg|png)$/i, '');
  const optimizedPath = `/assets/optimized/${basePath.split('/').pop()}.webp`;
  
  return getAssetPath(optimizedPath);
}

/**
 * Preloads important images for faster rendering
 */
export function preloadCriticalImages(imagePaths: string[]): void {
  if (typeof window === 'undefined') return;
  
  // Preload images with low priority to avoid blocking main thread
  requestIdleCallback(() => {
    imagePaths.forEach(path => {
      if (loadedImages.has(path)) return;
      
      const optimizedPath = getOptimizedImagePath(path);
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = optimizedPath;
      document.head.appendChild(link);
      
      loadedImages.set(path, true);
    });
  });
}

/**
 * Helper function for requestIdleCallback with fallback
 */
const requestIdleCallback = 
  (typeof window !== 'undefined' && 'requestIdleCallback' in window) 
    ? (window as any).requestIdleCallback 
    : (cb: Function) => setTimeout(cb, 1); 