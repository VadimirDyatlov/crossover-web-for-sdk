import type { ComponentType, FC } from 'react';

export interface RouteDefProps {
  /** Путь маршрута */
  path: string;
  /**  React-компонент, который должен быть отрендерен для этого пути. */
  component: ComponentType;
}

/**
 * RouteDef — декларативное определение маршрута для AnimatedSwitch.
 * Компонент не выполняет отрисовку самостоятельно, а передает метаданные 
 * родителю для управления анимациями и навигацией.
 */
export const RouteDef: FC<RouteDefProps> = () => null;
