import type { FC, ReactNode } from 'react';
import { useEffect } from 'react';
import { cn } from '@/shared/lib';

interface TransitLayerProps {
  /** Контент страницы */
  children: ReactNode;
  /** Флаг начала выхода: запускает exitClass и удаление */
  isExiting: boolean;
  /** Флаг начала входа: запускает enterClass */
  isEntering: boolean;
  /** CSS-класс анимации появления */
  enterClass: string;
  /** CSS-класс анимации исчезновения */
  exitClass: string;
  /** Коллбэк для удаления слоя из DOM после анимации */
  onExited: () => void;
}

/**
 * TransitLayer — изолированный слой анимации.
 */
export const TransitLayer: FC<TransitLayerProps> = ({
  children,
  isExiting,
  enterClass,
  exitClass,
  isEntering,
  onExited,
}) => {
  // Обработка случая, когда анимация не задана (мгновенный переход)
  useEffect(() => {
    if (isExiting && (!exitClass)) {
      onExited();
    }
  }, [isExiting, exitClass, onExited]);

  return (
    <div
      onAnimationEnd={(e) => {
        // Важно: реагируем только на анимацию самого контейнера
        if (e.target === e.currentTarget && isExiting) {
          onExited();
        }
      }}
      className={cn(
        'h-full w-full absolute inset-0 overflow-y-auto transform-gpu',
        isExiting ? exitClass : isEntering ? enterClass : '',
        'will-change-transform',
      )}
    >
      {children}
    </div>
  );
};
