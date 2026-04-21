// Последнее слово в названии товара — вес/объём («500г», «1л»)
// Дублировалось в CartProductCard и OrderProductCard — вынесено в утилиту
export const parseProductName = (fullName: string): { name: string; weight: string | undefined } => {
  const parts = fullName.split(' ');
  const weight = parts.length > 1 ? parts.pop() : undefined;
  return { name: parts.join(' '), weight };
};
