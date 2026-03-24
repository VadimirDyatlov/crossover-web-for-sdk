import { useEffect, useRef } from 'react';
import { useLocation } from 'wouter';

interface UsePreviousReturn {
  location: string;
  previousLocation: string | null;
}

export const usePrevious = (): UsePreviousReturn => {
  const [location] = useLocation();
  const ref = useRef<string | null>(null);
  
  useEffect(() => {
    ref.current = location;
  }, [location]);
  
  return {
    location,
    previousLocation: ref.current
  };
};
