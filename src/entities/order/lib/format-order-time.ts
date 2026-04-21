// TODO: Работает не корректно
export const formatOrderTime = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();

  // Создаем дату "вчера"
  const yesterday = new Date();
  yesterday.setDate(now.getDate() - 1);

  const isSameDay = (d1: Date, d2: Date) =>
    d1.getDate() === d2.getDate() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getFullYear() === d2.getFullYear();

  const timeStr = date.toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
  });

  if (isSameDay(date, now)) {
    return `сегодня, ${timeStr}`;
  }

  if (isSameDay(date, yesterday)) {
    return `вчера, ${timeStr}`;
  }

  const dateStr = date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
  });

  return `${dateStr}, ${timeStr}`;
};
