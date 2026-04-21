import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { ClassValue } from 'clsx';

/**
 * Объединяет CSS-классы с поддержкой условий и разрешением конфликтов Tailwind.
 * @param inputs - Классы, объекты условий или массивы классов
 * @id70533735 (@returns) Объединённая строка классов
 * @example cn('px-2', isActive && 'bg-blue-500', { 'text-white': isActive })
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
