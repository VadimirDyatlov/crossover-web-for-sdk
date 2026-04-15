import { ProductCard } from "@/entities/product";
import { useProductStore } from "@/entities/product/model/product";
import { AddToCart } from "@/features/add-to-cart/ui/add-to-cart";
import { useOpenProduct } from "@/features/open-product-details";
import { cn } from "@/shared/lib";
import { Stack } from "@/shared/ui";
import type { FC } from 'react';

export const ProductList: FC = () => {
  const { data } = useProductStore((state) => state.productList);
  const handleOpen = useOpenProduct();

  return (
    <Stack
      spacing="xs"
      className={cn(
        'grid grid-cols-2 p-4',
        // "pb-[120px]",
        'pb-[calc(120px+env(safe-area-inset-bottom,0px))]',
      )}
    >
      {data.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={() => handleOpen(product)}
        >
          <AddToCart product={product} className="absolute bottom-2 right-2" />
        </ProductCard>
      ))}
    </Stack>
  );
};
