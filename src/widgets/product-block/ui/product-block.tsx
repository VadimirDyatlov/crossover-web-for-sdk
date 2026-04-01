import { ProductCard } from "@/entities/product";
import { AddToCart } from "@/features/add-to-cart/ui/add-to-cart";
import { ProductList } from "@/features/product-list";
import type { types } from "@/shared/api";
import type { FC } from "react";

export const ProductBlock: FC = () => {
  return (
    <ProductList
      renderCard={(product: types.Product) => (
        <ProductCard key={product.id} product={product}>
          <AddToCart product={product} className="absolute bottom-2 right-2" />
        </ProductCard>
      )}
    />
  );
};
