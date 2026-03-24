import { useMerchantInfo, useMerchantLazy } from '@/entities/merchant-info';
import { useProductsBlock } from '@/features/products-block/model/products-block';
import { BackButton, Box, Stack, Typography } from '@/shared/ui';
import type { FC } from 'react';

export const CartPage: FC = () => {
  useMerchantLazy();
  const merchantInfo = useMerchantInfo((state) => state.data);
  const { data } = useProductsBlock();

  return (
    <Box flexDirection="column">
      {/* header cart */}
      <Stack direction='horizontal' justify='between' align='center' className="ml-2 mr-4">
        <BackButton />
        <Stack align='center'>
          <Typography.Headline3>Заказ</Typography.Headline3>
          <Typography.Body1>{merchantInfo?.address}</Typography.Body1>
        </Stack>
        <Stack className="w-9 h-9 rounded-full overflow-hidden">
          <img src={merchantInfo?.logoUrl} alt="logo" className="w-full h-full object-cove" />
        </Stack>
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


  // const { fetchProductList, data } = useProductsBlock();
  // const { selectedCategory } = useCategory();

  // useEffect(() => {
  //   if (!selectedCategory) return;

  //   fetchProductList(selectedCategory.id);
  // }, [selectedCategory]);

  // return (
  //   <Stack
  //     spacing="sm"
  //     wrap={true}
  //     className="ml-2 mr-2 grid grid-cols-2 z-10 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
  //   >
  //     {data.map((product) => {
  //       return <ProductCard key={product.id} card={product} />;
  //     })}
  //   </Stack>