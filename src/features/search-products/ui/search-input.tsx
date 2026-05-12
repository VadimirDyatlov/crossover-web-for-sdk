import type { FC } from 'react';
import { SearchField } from '@/shared/ui';
import { useSearchLogic } from '../model/search-products';

export const ProductSearchInput: FC = () => {
  const { query, setQuery } = useSearchLogic();

  return <SearchField autoFocus value={query} onChange={setQuery} />;
};
