import { useEffect, useRef } from 'react';

type RelaxedScrollBehavior = ScrollBehavior;
type RelaxedScrollLogicalPosition = ScrollLogicalPosition;

interface RelaxedScrollOptions {
  behavior?: RelaxedScrollBehavior;
  inline?: RelaxedScrollLogicalPosition;
  block?: RelaxedScrollLogicalPosition;
}

export const useScrollIntoView = <T>(
  activeDependency: T,
  {
    behavior = 'smooth',
    inline = 'center',
    block = 'nearest',
  }: RelaxedScrollOptions = {},
) => {
  const elementRef = useRef<any>(null);

  useEffect(() => {
    if (elementRef.current && activeDependency) {
      elementRef.current.scrollIntoView({ behavior, inline, block });
    }
  }, [activeDependency]);

  return elementRef;
};
