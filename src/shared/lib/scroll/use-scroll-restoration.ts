import { useEffect, useLayoutEffect, useRef } from 'react';
import { useScrollRestorationStore } from '@/shared/model/scroll-store';

export const useScrollRestoration = (scope: string, id?: string) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const setPosition = useScrollRestorationStore((state) => state.setPosition);
  const positions = useScrollRestorationStore((state) => state.positions);

  const currentInfo = useRef({ scope, id });
  currentInfo.current = { scope, id };

  useLayoutEffect(() => {
    if (scrollRef.current && id) {
      const savedPosition = positions[scope]?.[id] ?? 0;
      scrollRef.current.scrollTop = savedPosition;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, scope]); 

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const handleScroll = () => {
      if (timeoutId) return;

      timeoutId = setTimeout(() => {
        const { scope: s, id: i } = currentInfo.current;
        if (i) setPosition(s, i, el.scrollTop);
        timeoutId = null;
      }, 300); // TODO: Может быть потеря точности
    };

    el.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      el.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [setPosition]);

  return { scrollRef };
};
