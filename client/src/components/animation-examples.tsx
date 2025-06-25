import { ScrollAnimation, AnimateItem } from "@/components/ui/scroll-animation";

/**
 * This component demonstrates different ways to use the ScrollAnimation components
 * It can be imported into any page to see examples of the animations
 */
export function AnimationExamples() {
  return (
    <div className="container mx-auto py-8 space-y-12">
      {/* Example 1: Basic fade-in animation */}
      <ScrollAnimation type="fade" className="p-6 bg-card rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Fade In Animation</h3>
        <p>This entire card fades in smoothly when it enters the viewport.</p>
      </ScrollAnimation>
      
      {/* Example 2: Slide-in animation from left */}
      <ScrollAnimation 
        type="slide" 
        direction="left" 
        className="p-6 bg-card rounded-lg shadow-md"
      >
        <h3 className="text-xl font-semibold mb-2">Slide In From Left</h3>
        <p>This card slides in from the left side when it becomes visible.</p>
      </ScrollAnimation>
      
      {/* Example 3: Slide-in animation from right */}
      <ScrollAnimation 
        type="slide" 
        direction="right" 
        className="p-6 bg-card rounded-lg shadow-md"
      >
        <h3 className="text-xl font-semibold mb-2">Slide In From Right</h3>
        <p>This card slides in from the right side when it becomes visible.</p>
      </ScrollAnimation>
      
      {/* Example 4: Scale animation */}
      <ScrollAnimation 
        type="scale" 
        className="p-6 bg-card rounded-lg shadow-md"
      >
        <h3 className="text-xl font-semibold mb-2">Scale Animation</h3>
        <p>This card scales up smoothly when it enters the viewport.</p>
      </ScrollAnimation>
      
      {/* Example 5: Staggered animation for list items */}
      <ScrollAnimation 
        type="stagger" 
        staggerChildren={true}
        className="p-6 bg-card rounded-lg shadow-md"
      >
        <h3 className="text-xl font-semibold mb-4">Staggered List Animation</h3>
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((item) => (
            <AnimateItem
              key={item}
              type="fade"
              className="p-4 bg-muted rounded-md"
            >
              <p>List item {item} with staggered animation</p>
            </AnimateItem>
          ))}
        </div>
      </ScrollAnimation>
      
      {/* Example 6: Combined animations with custom duration */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {['fade', 'slide', 'scale'].map((type, index) => (
          <ScrollAnimation
            key={type}
            type={type as any}
            direction={index === 1 ? 'up' : undefined}
            duration={0.8}
            delay={index * 100}
            className="p-6 bg-card rounded-lg shadow-md h-full"
          >
            <h3 className="text-xl font-semibold mb-2">
              Animation Type: {type}
            </h3>
            <p>Custom duration of 0.8s with staggered delay.</p>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
} 