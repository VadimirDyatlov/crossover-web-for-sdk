import type { ReactNode, ReactElement } from 'react';
import type { RouteDefProps } from './route-def';
import React from 'react';
import type { Layer, TransitionPreset, TransitionType } from './types';
import { TRANSITION_PRESETS } from './constants';

/**
 * Находит подходящий компонент среди дочерних элементов на основе текущего пути.
 * Выполняет строгое сравнение пути (директива exact по умолчанию).
 * @param {ReactNode} children - Список дочерних компонентов (ожидаются RouteDef).
 * @param {string} location - Текущий путь из роутера (pathname).
 * @returns {{
 *   Component: React.ComponentType | null;
 *   isNotFound: boolean
 * }} Объект с результатами поиска.
 *
 * @todo Реализовать поддержку динамических параметров (например, /user/:id)
 * через регулярные выражения или библиотеку типа path-to-regexp.
 */
export const matchChild = (children: ReactNode, location: string) => {
  // Превращаем children в плоский массив для удобного поиска
  const childrenArray = React.Children.toArray(
    children,
  ) as ReactElement<RouteDefProps>[];
  
  // Ищем точное совпадение
  const directMatch = childrenArray.find(
    (child) => React.isValidElement(child) && child.props.path === location
  );

  if (directMatch) return { Component: directMatch.props.component, isNotFound: false };

  // Ищем звездочку
  const fallback = childrenArray.find(
    (child) => React.isValidElement(child) && child.props.path === '*'
  );

  return fallback 
    ? { Component: fallback.props.component, isNotFound: true } 
    : { Component: null, isNotFound: true };
};

/**
 * Очищает ключ анимации из состояния истории браузера.
 */
export const clearTransitionState = () => {
  try {
    const currentState = window.history.state;
    if (currentState?.animate) {
      // Создаем копию состояния без ключа animate
      const { animate, ...restState } = currentState;
      window.history.replaceState(restState, '');
    }
  } catch (e) {
    console.error('Failed to clear navigation metadata', e);
  }
};

/**
 * Извлекает текущий пресет анимации из истории браузера и сопоставляет его со словарем пресетов.
 * @param {Record<string, TransitionPreset>} presets - Словарь доступных пресетов анимации (TRANSITION_PRESETS).
 * @returns {TransitionPreset} Возвращает объект пресета с классами анимации или пресет по умолчанию (none).
 */
export const getTransitionPreset = (isNotFound: boolean) => {
  if (isNotFound) return TRANSITION_PRESETS.none;
  
  const key = window.history.state?.animate as TransitionType;

  return TRANSITION_PRESETS[key] || TRANSITION_PRESETS.none;
};

/**
 * Инициализирует начальное состояние навигационного стека.
 * @param {ReactNode} children - Роуты, переданные в AnimatedSwitch.
 * @param {string} location - Текущий путь (pathname) из роутера.
 * @returns {Array<Layer>} Массив с начальной страницей или пустой массив, если соответствие не найдено.
 */
export const initState = (children: ReactNode, location: string): Layer[] => {
  const {Component, isNotFound} = matchChild(children, location);

  if (!Component) return [];

  return [
    {
      id: `init-${Date.now()}`,
      Component: Component,
      isExiting: false,
      // Первая страница появляется сразу без анимации
      isEntering:  !isNotFound,
      enterClass: '',
      exitClass: '',
    },
  ];
};
