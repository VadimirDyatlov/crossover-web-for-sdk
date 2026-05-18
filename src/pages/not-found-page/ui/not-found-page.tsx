import type { FC } from 'react';
import { useAppNavigation } from '@/shared/lib';
import { TransitionPresetName } from '@/shared/lib/mini-motion';
import { FullPageError } from '@/shared/ui';

export const NotFoundPage: FC = () => {
  const { openCatalog } = useAppNavigation();

  return (
    <FullPageError
      title="404"
      description="Страница не найдена"
      onBack={() => openCatalog(TransitionPresetName.None)}
    />
  );
};
