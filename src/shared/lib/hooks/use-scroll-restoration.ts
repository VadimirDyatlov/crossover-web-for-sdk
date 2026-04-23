import { useEffect, useLayoutEffect, useRef } from 'react';
import { useScrollRestorationStore } from '@/shared/model/scroll-store';

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
    // savedPosition intentionally omitted: restore only on scope/id change, not on every scroll
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope, id]);

  useLayoutEffect(() => {
    const el = scrollRef.current;
    return () => {
      if (el) setPosition(scope, id, el.scrollTop);
    };
  }, [scope, id, setPosition]);

  return { scrollRef, clearScope: () => clearScope(scope) };
};
