import { motion, Variants, MotionProps } from "framer-motion";
import { ReactNode } from "react";
import { 
  useScrollAnimation, 
  fadeInVariants, 
  slideInVariants, 
  scaleVariants, 
  staggerContainerVariants 
} from "@/hooks/useScrollAnimation";

export type AnimationType = "fade" | "slide" | "scale" | "stagger";
export type SlideDirection = "left" | "right" | "up" | "down";

interface ScrollAnimationProps extends Omit<MotionProps, "variants" | "initial" | "animate" | "exit"> {
  children: ReactNode;
  type?: AnimationType;
  direction?: SlideDirection;
  threshold?: number;
  delay?: number;
  duration?: number;
  triggerOnce?: boolean;
  staggerChildren?: boolean;
  className?: string;
  rootMargin?: string;
  customVariants?: Variants;
}

export function ScrollAnimation({
  children,
  type = "fade",
  direction = "up",
  threshold = 0.1,
  delay = 0,
  duration,
  triggerOnce = true,
  staggerChildren = false,
  className = "",
  rootMargin = "0px",
  customVariants,
  ...props
}: ScrollAnimationProps) {
  const { ref, controls } = useScrollAnimation({
    threshold,
    triggerOnce,
    rootMargin,
    delay,
  });

  // Select animation variants based on type
  let variants = customVariants;
  if (!variants) {
    switch (type) {
      case "fade":
        variants = fadeInVariants;
        break;
      case "slide":
        variants = slideInVariants;
        break;
      case "scale":
        variants = scaleVariants;
        break;
      case "stagger":
        variants = staggerContainerVariants;
        break;
      default:
        variants = fadeInVariants;
    }
  }

  // Apply custom duration if specified
  if (duration && variants.visible && typeof variants.visible === 'object') {
    variants = {
      ...variants,
      visible: {
        ...variants.visible,
        transition: {
          ...(variants.visible.transition as any),
          duration,
        },
      },
    };
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      custom={direction}
      className={className}
      {...props}
    >
      {staggerChildren ? (
        <motion.div variants={staggerContainerVariants}>
          {children}
        </motion.div>
      ) : (
        children
      )}
    </motion.div>
  );
}

// Child component for staggered animations
export function AnimateItem({
  children,
  type = "fade",
  direction = "up",
  className = "",
  customVariants,
  ...props
}: Omit<ScrollAnimationProps, "ref" | "controls" | "threshold" | "triggerOnce" | "rootMargin" | "delay">) {
  let variants = customVariants;
  if (!variants) {
    switch (type) {
      case "fade":
        variants = fadeInVariants;
        break;
      case "slide":
        variants = slideInVariants;
        break;
      case "scale":
        variants = scaleVariants;
        break;
      default:
        variants = fadeInVariants;
    }
  }

  return (
    <motion.div
      variants={variants}
      custom={direction}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
} 