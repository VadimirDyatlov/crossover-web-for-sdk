import type { FC } from 'react';
import { Box } from '@/shared/ui';
import { SearchHeader } from '@/widgets/header';
import { SearchResultList } from '@/widgets/search-results';

// TODO: В разработке
export const SearchPage: FC = () => {
  return (
    <Box flexDirection="column" className="h-dvh overflow-hidden">
      <SearchHeader />
      <SearchResultList />
      <div className="min-h-0 flex-1 overflow-y-auto pb-[env(safe-area-inset-bottom,0px)]" />
    </Box>
  );
};
