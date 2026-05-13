import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'wouter';
// shared/ui/PageTransition.tsx
import { cn } from '@/shared/lib';

// export const PageTransition = ({ children }: { children: ReactNode }) => {
//   const [location] = useLocation();
//   const [displayChildren, setDisplayChildren] = useState<ReactNode>(children);
//   const [animationClass, setAnimationClass] = useState('animate-fade-in');

//   useEffect(() => {
//     if (children !== displayChildren) {
//       // 1. Сначала запускаем анимацию ухода
//       // Здесь можно добавить проверку на 'назад', если сохранять историю путей
//       setAnimationClass('animate-fade-out');

//       // 2. Ждем окончания анимации (0.5s из твоего CSS)
//       const timer = setTimeout(() => {
//         setDisplayChildren(children);
//         setAnimationClass('animate-fade-in');
//       }, 450);

//       return () => clearTimeout(timer);
//     }
//   }, [children, displayChildren]);

//   return (
//     <div className={animationClass}>
//       {displayChildren}
//     </div>
//   );
// };

// export const PageTransition = ({ children }: { children: ReactNode }) => {
//   const [location] = useLocation(); // Теперь используем!
//   const [displayChildren, setDisplayChildren] = useState<ReactNode>(children);
//   const [animationClass, setAnimationClass] = useState('animate-fade-in');

//   // Храним предыдущий путь для определения направления
//   const prevLocation = useRef(location);

//   useEffect(() => {
//     if (location !== prevLocation.current) {
//       // 1. Определяем направление (упрощенно: если путь короче — это назад)
//       const isBack = location.length < prevLocation.current.length;

//       // 2. Выбираем анимацию ухода
//       const outClass = isBack ? 'animate-slide-out-right' : 'animate-fade-out';
//       setAnimationClass(outClass);

//       const timer = setTimeout(() => {
//         // 3. Меняем контент
//         setDisplayChildren(children);

//         // 4. Выбираем анимацию входа
//         const inClass = isBack ? 'animate-slide-in-left' : 'animate-price-fade';
//         setAnimationClass(inClass);

//         prevLocation.current = location;
//       }, 450);

//       return () => clearTimeout(timer);
//     }
//   }, [location, children]);

//   return (
//     <div
//       className={cn(
//         // 'relative w-full min-h-screen overflow-x-hidden bg-white',
//         'relative  w-full',

//         animationClass,
//       )}
//     >
//       {displayChildren}
//     </div>
//   );
// };

export const PageTransition = ({ children }: { children: ReactNode }) => {
  const [location] = useLocation();
  const [displayChildren, setDisplayChildren] = useState<ReactNode>(children);
  const [animationClass, setAnimationClass] = useState('animate-fade-in');

  const prevLocation = useRef(location);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Пропускаем первый рендер, чтобы страница просто появилась
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (location !== prevLocation.current) {
      const isBack = location.length < prevLocation.current.length;

      // 1. СРАЗУ запускаем анимацию ухода
      // Но НЕ меняем displayChildren — на экране все еще СТАРАЯ страница
      const outClass = isBack ? 'animate-slide-out-right' : 'animate-fade-out';
      setAnimationClass(outClass);

      const timer = setTimeout(() => {
        // 2. Только когда старая страница "исчезла" (через 450мс), подменяем контент
        setDisplayChildren(children);

        // 3. Запускаем анимацию входа для новой страницы
        const inClass = isBack ? 'animate-slide-in-left' : 'animate-price-fade';
        setAnimationClass(inClass);

        prevLocation.current = location;
      }, 450); // Это время должно быть чуть меньше времени из CSS (0.5s)

      return () => clearTimeout(timer);
    }
  }, [location, children]);

  return (
    // Обязательно добавляем fixed или absolute для плавности переходов
    // чтобы блоки не "прыгали" друг под друга
    <div className="relative w-full h-screen overflow-hidden bg-white">
      <div className={cn('w-full h-full', animationClass)}>{displayChildren}</div>
    </div>
  );
};
