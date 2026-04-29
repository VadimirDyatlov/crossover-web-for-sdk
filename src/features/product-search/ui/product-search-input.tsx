import type { FC } from 'react';
import { SearchField } from '@/shared/ui';
import { useProductSearchStore } from '../model/product-search';

export const ProductSearchInput: FC = () => {
  const searchQuery = useProductSearchStore((state) => state.searchQuery);
  const setSearchQuery = useProductSearchStore((state) => state.setSearchQuery);

  return <SearchField value={searchQuery} onChange={setSearchQuery} autoFocus />;
};
