import type { ComponentType } from 'react';
import type { TRANSITION_PRESETS } from './constants';

export interface Layer {
  /** Уникальный ID для ключа в итерации и управления таймерами */
  id: string;
  /** React-компонент страницы. */
  Component: ComponentType;
  /** Статус выхода: запускает exitClass и логику удаления */
  isExiting: boolean;
  /** Статус входа: запускает enterClass (для новых страниц в стеке) */
  isEntering: boolean;
  /** CSS-классы для анимации появления */
  enterClass: string;
  /** CSS-классы для анимации исчезновения */
  exitClass: string;
}

export interface TransitionPreset {
  /** CSS-классы для анимации появления */
  enterClass: string;
  /** CSS-классы для анимации исчезновения */
  exitClass: string;
}

export type TransitionType  = keyof typeof TRANSITION_PRESETS;
