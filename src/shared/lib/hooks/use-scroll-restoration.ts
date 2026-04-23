import { useScrollRestorationStore } from '@/shared/model/scroll-store';
import { useEffect, useLayoutEffect, useRef } from 'react';

export const useScrollRestoration = (
  scope: string,
  id: string = 'default',
  minScroll: number = 0,
) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { positions, setPosition, clearScope } = useScrollRestorationStore();

  // const savedPosition = positions[scope]?.[id] || 0;
  const savedPosition = positions[scope]?.[id] ?? minScroll;

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = savedPosition;
    }
  }, [scope, id]);

  useLayoutEffect(() => {
    const el = scrollRef.current;
    return () => {
      if (el) setPosition(scope, id, el.scrollTop);
    };
  }, [scope, id, setPosition]);

  return { scrollRef, clearScope: () => clearScope(scope) };
};
