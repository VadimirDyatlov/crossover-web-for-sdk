import type { FC, ReactNode } from 'react';
import { TransitLayer } from './transit-layer';
import { cn } from '../utils';
import { useTransitionLogic } from './use-transition-logic';

interface AnimatedSwitchProps {
  children: ReactNode;
}

/**
 * AnimatedSwitch — менеджер навигационных переходов.
 * Управляет жизненным циклом слоев (Layers), синхронизирует их появление
 * и удаление, а также блокирует взаимодействие с UI во время анимации.
 */
export const AnimatedSwitch: FC<AnimatedSwitchProps> = ({ children }) => {
  const { items, isTransitioning, handleRemove } = useTransitionLogic(children);

  return (
    <div
      className={cn(
        'relative w-full h-screen overflow-hidden',
        isTransitioning && 'pointer-events-none cursor-wait',
      )}
    >
      {items.map((item) => (
        <TransitLayer key={item.id} {...item} onExited={handleRemove(item.id)}>
          <item.Component />
        </TransitLayer>
      ))}
    </div>
  );
};
