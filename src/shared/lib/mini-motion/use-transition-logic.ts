import type { ReactNode } from 'react';
import type { Layer } from './types';
import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useLocation } from 'wouter';
import { SAFETY_TIMEOUT } from './constants';
import {
  clearTransitionState,
  getTransitionPreset,
  initState,
  matchChild,
} from './utils';

interface UseTransitionLogicReturn {
  items: Layer[];
  isTransitioning: boolean;
  handleRemove: (id: string) => () => void;
}

/**
 * Хук для управления логикой анимированных переходов между страницами.
 * Реализует синхронизацию стейта в фазе рендера для предотвращения мерцания (flicker-free).
 * @param {ReactNode} children - Набор дочерних элементов RouteDef, в которых описаны компоненты страниц.
 * @returns {UseTransitionLogicReturn} Объект с состоянием анимации.
 */
export const useTransitionLogic = (
  children: ReactNode,
): UseTransitionLogicReturn => {
  const [location] = useLocation();

  // Ленивая инициализация: initState выполнится только ОДИН раз при маунте.
  const [state, setState] = useState(() => ({
    currentLocation: location,
    items: initState(children, location) as Layer[],
  }));

  // Хранилище ID таймеров для управления жизненным циклом уходящих страниц.
  const timeouts = useRef<Record<string, ReturnType<typeof setTimeout>>>({});

  /**
   * Удаляет страницу из стейта по окончании анимации или по таймеру.
   * @param {string} id - Уникальный идентификатор слоя, который необходимо удалить.
   */
  const handleRemove = (id: string) => () => {
    if (timeouts.current[id]) clearTimeout(timeouts.current[id]);
    setState((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.id !== id),
    }));
    clearTransitionState();
  };

  console.log(location !== state.currentLocation);
  
  if (location !== state.currentLocation) {
    const { Component: NextComponent, isNotFound } = matchChild(children, location);
    const { enterClass, exitClass } = getTransitionPreset(isNotFound);

    if (NextComponent) {
      // Подготавливаем текущию страницу к выходу
      const updatedItems = state.items.map((item) => {
        // Если страница уже анимирует выход, не трогаем её
        if (item.isExiting) return item;

        // 1. При смене страницы в условие if (location !== state.currentLocation) мы попадаем один раз
        // 2. Если мы попали туда два раза на одной странице, то таймер мы очистим и только после заведем новый
        if (timeouts.current[item.id]) clearTimeout(timeouts.current[item.id]);

        const timerId = setTimeout(() => handleRemove(item.id)(), SAFETY_TIMEOUT);
        timeouts.current[item.id] = timerId;

        // Переводим страницу в статус выхода и фиксируем её анимацию
        return { ...item, isExiting: true, enterClass, exitClass };
      });

      // Добавляем новую страницу в массив.
      updatedItems.push({
        id: uuidv4(),
        Component: NextComponent,
        isExiting: false,
        // Флаг запуска анимации входа для новой страницы
        isEntering: true,
        enterClass,
        exitClass,
      });

      // Мгновенное обновление стейта до того, как браузер отрисует кадр
      setState({ currentLocation: location, items: updatedItems });
    }
  }

  /**
   * Запуск сайд-эффектов
   */
  // Удалить!
  // useEffect(() => {
  //   state.items.forEach((item) => {
  //     // Обрабатываем только те страницы, которые перешли в статус выхода
  //     if (item.isExiting) {
  //       // ЗАЩИТА ОТ ГОНКИ УСЛОВИЙ: Если для этого ID уже существовал таймер,
  //       // (например, страница прервала свой вход и сразу начала выходить), очищаем его.
  //       if (timeouts.current[item.id]) {
  //         clearTimeout(timeouts.current[item.id]);
  //       }

  //       // Запускаем гарантированный таймер удаления
  //       // eslint-disable-next-line react-web-api/no-leaked-timeout
  //       const timerId = setTimeout(() => {
  //         handleRemove(item.id)();
  //       }, SAFETY_TIMEOUT);

  //       timeouts.current[item.id] = timerId;
  //     }
  //   });

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [state.items]);

  /**
   * Очистка всех таймеров при размонтировании роутера.
   */
  useEffect(() => {
    const currentTimeouts = timeouts.current;

    return () => {
      // Чистим все запланированные удаления страниц
      Object.values(currentTimeouts).forEach(clearTimeout);
    };
  }, []);

  return {
    items: state.items,
    // Флаг для блокировки кликов (pointer-events-none)
    isTransitioning: state.items.length > 1,
    handleRemove,
  };
};
