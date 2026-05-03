import { useEffect, useMemo } from "react";
import { useCategoryStore } from "@/entities/category";
import { useMerchantStore } from "@/entities/merchant";
import { useProductStore } from "@/entities/product";

export const useCatalogInit = () => {
  const categoryData = useMerchantStore((state) => state.data?.category);
  const categories = useMemo(() => categoryData || [], [categoryData]);
  const pointId = useMerchantStore((state) => state.data?.pointId) || '';

  const { selectedCategory, setSelectedCategory } = useCategoryStore();
  const fetchProductList = useProductStore((state) => state.fetchProductList);

  useEffect(() => {
      if (categories.length > 0 && !selectedCategory) {

      const params = {
        categoryId: categories[0].id,
        pointId,
      }
      
      setSelectedCategory(categories[0]);
      fetchProductList(params);
    }
  }, [categories, selectedCategory, setSelectedCategory, fetchProductList, pointId]); // ??
};
