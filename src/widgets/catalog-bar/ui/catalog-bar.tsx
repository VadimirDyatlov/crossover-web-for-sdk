import { Header } from '@/entities/header';
import { CompanyInfo } from '@/entities/company-info';
import { CategorySelector } from '@/features/сategory-selector/ui/category-selector';
import { Box } from '@/shared/ui';
import type { FC } from 'react';
import type { types } from '@/shared/api';

interface CatalogBarProps {
  merchant: types.MerchantResponse | null; 
  categories: types.Category[];
  selectedCategory: types.Category | null;
  setSelectedCategory: (category: types.Category) => void;
}

export const CatalogBar: FC<CatalogBarProps> = (props) => {
  const { merchant, categories, selectedCategory, setSelectedCategory } = props;

  return (
    <Box
      flexDirection="column"
      className="sticky top-0 z-12 bg-white/80 backdrop-blur-[40px]"
    >
      <Header />
      <CompanyInfo
        name={merchant?.name}
        address={merchant?.address}
        logoUrl={merchant?.logoUrl}
      />
      <CategorySelector
        categories={categories}
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />
    </Box>
  );
};
