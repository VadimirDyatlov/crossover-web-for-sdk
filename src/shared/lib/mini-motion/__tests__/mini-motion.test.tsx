import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { AnimatedSwitch } from '../animated-switch';
import { RouteDef } from '../route-def';
import { TransitLayer } from '../transit-layer';
import * as useTransitionLogicModule from '../use-transition-logic';

// Мокаем хук логики переходов
vi.mock('../useTransitionLogic', () => ({
  useTransitionLogic: vi.fn(),
}));

const DummyCatalog = () => <div data-testid="catalog-page">Catalog</div>;
// const DummyCart = () => <div data-testid="cart-page">Cart</div>;

describe('mini-Motion Library', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('routeDef', () => {
    it('should return null and not render anything directly', () => {
      const { container } = render(
        <RouteDef path="/catalog" component={DummyCatalog} />,
      );
      expect(container.firstChild).toBeNull();
    });
  });

  describe('animatedSwitch', () => {
    it('should render active items provided by useTransitionLogic', () => {
      // Имитируем, что сейчас активен один элемент (Catalog)
      vi.spyOn(useTransitionLogicModule, 'useTransitionLogic').mockReturnValue({
        items: [
          {
            id: '1',
            Component: DummyCatalog,
            enterClass: 'fade-in',
            exitClass: 'fade-out',
            isEntering: true,
            isExiting: false,
          },
        ],
        isTransitioning: false,
        handleRemove: () => vi.fn(),
      });

      render(
        <AnimatedSwitch>
          <RouteDef path="/" component={DummyCatalog} />
        </AnimatedSwitch>,
      );

      expect(screen.getByTestId('catalog-page')).toBeInTheDocument();
    });

    it('should apply pointer-events-none and wait cursor during transition', () => {
      // Имитируем состояние анимации перехода (isTransitioning: true)
      vi.spyOn(useTransitionLogicModule, 'useTransitionLogic').mockReturnValue({
        items: [],
        isTransitioning: true,
        handleRemove: () => vi.fn(),
      });

      const { container } = render(<AnimatedSwitch>{[] as any}</AnimatedSwitch>);
      const wrapper = container.firstChild as HTMLElement;

      expect(wrapper).toHaveClass('pointer-events-none');
      expect(wrapper).toHaveClass('cursor-wait');
    });
  });

  describe('transitLayer', () => {
    it('should instantly call onExited if isExiting is true but exitClass is empty', () => {
      const mockOnExited = vi.fn();

      render(
        <TransitLayer
          isEntering={false}
          isExiting
          enterClass="fade-in"
          exitClass=""
          onExited={mockOnExited}
        >
          <div>Content</div>
        </TransitLayer>,
      );

      // Эффект должен сразу стриггерить удаление
      expect(mockOnExited).toHaveBeenCalledTimes(1);
    });

    it('should call onExited when animation ends on the container itself', () => {
      const mockOnExited = vi.fn();

      const { container } = render(
        <TransitLayer
          isEntering={false}
          isExiting
          enterClass="fade-in"
          exitClass="fade-out"
          onExited={mockOnExited}
        >
          <div data-testid="child-element">Child inside animation</div>
        </TransitLayer>,
      );

      const layerContainer = container.firstChild as HTMLElement;

      // Имитируем окончание анимации на ДОЧЕРНЕМ элементе (не должно вызывать onExited)
      fireEvent.animationEnd(screen.getByTestId('child-element'));
      expect(mockOnExited).not.toHaveBeenCalled();

      // Имитируем окончание анимации на самом КОНТЕЙНЕРЕ слоя
      fireEvent.animationEnd(layerContainer);
      expect(mockOnExited).toHaveBeenCalledTimes(1);
    });

    it('should apply enterClass when entering and exitClass when exiting', () => {
      const { rerender, container } = render(
        <TransitLayer
          isEntering
          isExiting={false}
          enterClass="animate-enter"
          exitClass="animate-exit"
          onExited={vi.fn()}
        >
          <div>Text</div>
        </TransitLayer>,
      );

      expect(container.firstChild).toHaveClass('animate-enter');
      expect(container.firstChild).not.toHaveClass('animate-exit');

      // Меняем пропсы на состояние выхода
      rerender(
        <TransitLayer
          isEntering={false}
          isExiting
          enterClass="animate-enter"
          exitClass="animate-exit"
          onExited={vi.fn()}
        >
          <div>Text</div>
        </TransitLayer>,
      );

      expect(container.firstChild).toHaveClass('animate-exit');
      expect(container.firstChild).not.toHaveClass('animate-enter');
    });
  });
});
