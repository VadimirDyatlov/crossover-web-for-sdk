import { useEffect, useState } from "react";
import { cn } from "@/shared/lib";
import PlaceholderSvg from './icon/placeholder.svg?react';
import ErrorSvg from './icon/error.svg?react';
import type { FC } from "react";

interface SmartImageProps {
  src?: string;
  alt?: string;
  className?: string;     
  imgClassName?: string; 
}

const imageCache = new Set<string>();

export const SmartImage: FC<SmartImageProps> = (props) => {
  const { src, alt, className, imgClassName } = props;

  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>(() => {
    if (!src) return 'error';
    return imageCache.has(src) ? 'loaded' : 'loading';
  });

  useEffect(() => {
    if (!src) {
      setStatus('error');
      return;
    }
    
    if (imageCache.has(src)) {
      setStatus('loaded');
      return;
    }

    setStatus('loading');
    
    const img = new Image();
    img.src = src;

    img.onload = () => {
      imageCache.add(src);
      setStatus('loaded');
    };
    img.onerror = () => setStatus('error');

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return (
    <div
      className={cn(
        'relative overflow-hidden flex items-center justify-center bg-gray-50',
        className,
      )}
    >
      {status === 'loading' && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <PlaceholderSvg className="w-1/2 h-1/2  opacity-30" />
        </div>
      )}
      {status === 'error' && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <ErrorSvg className="w-1/2 h-1/2 opacity-30" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={cn(
          "w-full h-full transition-all duration-500",
          imgClassName,
          status === 'loaded' ? "opacity-100" : "opacity-0"
        )}
      />
    </div>
  );
};
