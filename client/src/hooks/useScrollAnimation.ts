import { useInView } from 'react-intersection-observer';
import { useAnimation, Variants } from 'framer-motion';
import { useEffect } from 'react';

// Default animation variants
export const fadeInVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: 20,
    transition: { duration: 0.3 }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Slide-in variants
export const slideInVariants: Variants = {
  hidden: (direction: 'left' | 'right' | 'up' | 'down' = 'up') => ({
    opacity: 0,
    x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
    y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
    transition: { duration: 0.3 }
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Scale-in variants
export const scaleVariants: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.3 }
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Stagger animation for child elements
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

interface UseScrollAnimationProps {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
  delay?: number;
}

export function useScrollAnimation({
  threshold = 0.1,
  triggerOnce = true,
  rootMargin = '0px',
  delay = 0
}: UseScrollAnimationProps = {}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ 
    threshold, 
    triggerOnce,
    rootMargin
  });

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        controls.start('visible');
      }, delay);
    } else {
      controls.start('hidden');
    }
  }, [controls, inView, delay]);

  return { ref, controls, inView };
} 