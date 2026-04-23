// @vitest-environment node
import { describe, expect, it } from 'vitest';
import { parseProductName } from './parse-product-name';

describe('parseProductName', () => {
  it('отделяет вес от названия', () => {
    expect(parseProductName('Кофе Арабика 250г')).toEqual({
      name: 'Кофе Арабика',
      weight: '250г',
    });
  });

  it('отделяет объём от названия', () => {
    expect(parseProductName('Молоко 1л')).toEqual({ name: 'Молоко', weight: '1л' });
  });

  it('возвращает undefined для weight если слово одно', () => {
    expect(parseProductName('Молоко')).toEqual({
      name: 'Молоко',
      weight: undefined,
    });
  });

  it('корректно обрабатывает многословное название', () => {
    const result = parseProductName('Сок яблочный прямого отжима 1л');
    expect(result).toEqual({ name: 'Сок яблочный прямого отжима', weight: '1л' });
  });
});
