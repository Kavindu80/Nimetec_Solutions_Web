import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using clsx and tailwind-merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Create proper asset paths for deployment
 */
export function getAssetPath(path: string) {
  // Handle both development and production asset paths
  if (path.startsWith('http')) return path;
  
  // Convert relative asset paths to absolute paths for Vercel deployment
  return path.startsWith('/') ? path : `/${path}`;
}

/**
 * Format currency using Intl API
 */
export function formatCurrency(amount: number, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
} 