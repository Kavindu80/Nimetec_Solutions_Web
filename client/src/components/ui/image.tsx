import { useState, useEffect } from "react";
import { getOptimizedImagePath } from "../../utils/imageLoading";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  lazyLoad?: boolean;
}

export function Image({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  lazyLoad = true,
  ...props
}: ImageProps) {
  const [imageSrc, setImageSrc] = useState<string>(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  // Optimize image path
  useEffect(() => {
    try {
      const optimizedPath = getOptimizedImagePath(src);
      setImageSrc(optimizedPath);
    } catch (error) {
      console.error("Failed to optimize image path:", error);
      setImageSrc(src); // Fallback to original src
    }
  }, [src]);

  // Handle image load
  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Handle image error
  const handleError = () => {
    setIsError(true);
    console.error(`Failed to load image: ${src}`);
    // Try to use original source if optimized fails
    if (imageSrc !== src) {
      setImageSrc(src);
    }
  };

  // Determine the loading strategy
  const loadingAttr = priority ? "eager" : lazyLoad ? "lazy" : undefined;
  
  // lazysizes classes for better loading
  const lazyClasses = lazyLoad && !priority ? "lazyload" : "";
  
  return (
    <div 
      className={`relative overflow-hidden ${isLoaded ? "bg-transparent" : "bg-gray-200"} ${className}`}
      style={{ width, height }}
    >
      {!isError ? (
        <img
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          loading={loadingAttr}
          onLoad={handleLoad}
          onError={handleError}
          className={`${lazyClasses} ${className} ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
          data-src={lazyLoad && !priority ? imageSrc : undefined}
          {...props}
        />
      ) : (
        <div 
          className={`flex items-center justify-center bg-gray-100 ${className}`}
          style={{ width, height }}
        >
          <span className="text-sm text-gray-500">Image not available</span>
        </div>
      )}
    </div>
  );
} 