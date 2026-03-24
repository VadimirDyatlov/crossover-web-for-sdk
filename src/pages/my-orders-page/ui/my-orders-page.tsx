import { useProductsBlock } from '@/features/products-block/model/products-block';
import { BackButton, Box, Stack, Typography } from '@/shared/ui';
import type { FC } from 'react';

export const MyOrdersPage: FC = () => {
  const { data } = useProductsBlock();
  
  return (
    <Box flexDirection="column">
      <Stack direction='horizontal' justify='center' align='center' className="ml-2 mr-4">
        <BackButton className="absolute left-0"  />
        <Typography.Headline3>Мои заказы</Typography.Headline3>
      </Stack>
      <Stack className='p-4'>
        <Typography.Body1>Страница находится в разработке</Typography.Body1>
      </Stack>
      <Stack className='p-4' spacing='xs'>
        {data.slice(0, 3).map((product) => {
          return (  
            <Stack className="flex flex-col rounded-xl overflow-hidden bg-gray-100 shadow-sm">
              <Stack className="w-full h-40 overflow-hidden bg-gray-100">
                <img
                  src="/coffee.png"
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  ref={(img) => {
                    if (!img) return;
                    const original = new Image();
                    original.onload = () => (img.src = product.imageUrl);
                    original.src = product.imageUrl;
                  }}
                />
              </Stack>
           <Stack className="p-3">
              <Typography.Headline4>{`${product.price} ₽`}</Typography.Headline4>
              <Typography.Body2Small>{product.name}</Typography.Body2Small>
            </Stack>
          </Stack>
        );
        })}
      </Stack>
    </Box>
  );
};
