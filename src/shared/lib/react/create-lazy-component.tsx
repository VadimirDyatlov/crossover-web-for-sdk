import type { ComponentType, ReactNode } from 'react';
import { lazy, Suspense } from 'react';

/**
 * Хелпер для создания ленивых компонентов с изолированной логикой Suspense.
 * @param {() => Promise<{ default: ComponentType }>} importFn - Функция динамического импорта компонента.
 * @param {ReactNode} fallback - React-компонент или JSX, отображаемый во время загрузки чанка.
 * @returns {ComponentType} Обернутый React-компонент, готовый к безопасному рендерингу.
 */
export const createLazyComponent = (
  importFn: () => Promise<{ default: ComponentType }>,
  fallback: ReactNode,
): ComponentType => {
  const LazyLib = lazy(importFn);

  return function LazyWrapper() {
    return (
      <Suspense fallback={fallback}>
        <LazyLib />
      </Suspense>
    );
  };
};
