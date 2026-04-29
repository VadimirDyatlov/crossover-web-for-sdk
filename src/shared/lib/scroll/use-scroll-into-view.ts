import { useEffect, useRef } from 'react';

type RelaxedScrollBehavior = ScrollBehavior;
type RelaxedScrollLogicalPosition = ScrollLogicalPosition;

interface RelaxedScrollOptions {
  behavior?: RelaxedScrollBehavior;
  inline?: RelaxedScrollLogicalPosition;
  block?: RelaxedScrollLogicalPosition;
}

// E extends HTMLElement позволяет передавать конкретный тип (HTMLButtonElement и т.д.)
// и получать RefObject<E> вместо RefObject<HTMLElement> — нет конфликта типов при передаче в ref
export const useScrollIntoView = <T, E extends HTMLElement = HTMLElement>(
  activeDependency: T,
  {
    behavior = 'smooth',
    inline = 'center',
    block = 'nearest',
  }: RelaxedScrollOptions = {},
) => {
  const elementRef = useRef<E>(null);

  useEffect(() => {
    if (elementRef.current && activeDependency) {
      elementRef.current.scrollIntoView({ behavior, inline, block });
    }
  }, [activeDependency, behavior, block, inline]);

  return elementRef;
};
