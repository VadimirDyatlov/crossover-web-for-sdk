import { Stack, Typography } from '@/shared/ui';
import type { FC } from 'react';

interface MerchantInfoProps {
  name?: string;
  address?: string;
  logoUrl?: string;
}

export const MerchantInfo: FC<MerchantInfoProps> = (props) => {
  // TODO: Убрать пропсы если не будем переиспользовать.
  const { name, address, logoUrl } = props;

  return (
    <Stack direction="horizontal" spacing="lg" className="m-3.5">
      {/* TODO: Добавить компонент Avatar? */}
      <Stack className="w-14 h-14 rounded-full overflow-hidden">
        <img src={logoUrl} alt="logo" className="w-full h-full object-cove" />
      </Stack>
      <Stack spacing="xs">
        <Typography.Headline3>{name}</Typography.Headline3>
        <Typography.Body1>{address}</Typography.Body1>
      </Stack>
    </Stack>
  );
};
