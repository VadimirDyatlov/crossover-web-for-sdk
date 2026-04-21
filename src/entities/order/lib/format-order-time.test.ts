// @vitest-environment node
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { formatOrderTime } from './format-order-time';

const TODAY = '2026-04-21T14:30:00';
const YESTERDAY = '2026-04-20T09:15:00';
const OLDER = '2026-03-15T08:00:00';

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date('2026-04-21T12:00:00'));
});

afterEach(() => {
  vi.useRealTimers();
});

describe('formatOrderTime', () => {
  it('возвращает "сегодня" для сегодняшней даты', () => {
    expect(formatOrderTime(TODAY)).toMatch(/^сегодня,/);
  });

  it('возвращает "вчера" для вчерашней даты', () => {
    expect(formatOrderTime(YESTERDAY)).toMatch(/^вчера,/);
  });

  it('возвращает дату для более старых записей', () => {
    const result = formatOrderTime(OLDER);
    expect(result).not.toMatch(/^сегодня/);
    expect(result).not.toMatch(/^вчера/);
    expect(result).toMatch(/15 марта/);
  });

  it('содержит время в формате ЧЧ:ММ', () => {
    expect(formatOrderTime(TODAY)).toMatch(/\d{2}:\d{2}$/);
  });

  it('корректно обрабатывает первое число месяца (граничный случай)', () => {
    vi.setSystemTime(new Date('2026-05-01T12:00:00'));
    const result = formatOrderTime('2026-04-30T10:00:00');
    expect(result).toMatch(/^вчера,/);
  });
});
