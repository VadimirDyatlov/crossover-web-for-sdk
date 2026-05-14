import PlaceholderSvg from './smart-image/icon/placeholder.svg?react';
import { Body1 } from './typography/body1';
import { Body2Small } from './typography/body2-small';
import { Body5Secondary } from './typography/body5-secondary';
import { Headline2 } from './typography/headline2';
import { Headline3 } from './typography/headline3';
import { Headline4 } from './typography/headline4';

import { Headline5 } from './typography/headline5';

export { BackButton } from './back-button/back-button';
export { Box } from './box/box';
export { Button } from './button/button';
export { Chip } from './chip/chip';
export { ErrorBoundary } from './error-boundary/error-boundary';
export { FullPageError } from './full-page-error/full-page-error';
export { InlineError } from './inline-error/inline-error';
export { Modal } from './modal/modal';
export { SearchField } from './search-field/search-field';
export { Skeleton } from './skeleton/skeleton';
export { SmartImage } from './smart-image/smart-image';
export { Stack } from './stack/stack';
export { SuspenseRoute } from './suspense-route/suspense-route';
export { PlaceholderSvg };

export const Typography = {
  Body1,
  Headline2,
  Headline3,
  Headline4,
  Headline5,
  Body2Small,
  Body5Secondary,
};

// TODO: Переписать typography
// shared/ui/typography/config.ts
// export const typographyVariants = {
//   headline3: "font-SBSansDisplay text-[20px] font-semibold leading-[24px]",
//   headline4: "font-SBSansDisplay text-[18px] font-semibold leading-[22px]",
//   body1: "font-SBSansText text-[16px] font-normal leading-[20px]",
//   body2small: "font-SBSansText text-[14px] font-normal leading-[18px] text-gray-500",
//   // ... и так далее все 8 вариантов
// } as const;

// export type TypographyVariant = keyof typeof typographyVariants;

// import { FC, ReactNode, ElementType } from 'react';
// import { cn } from '@/shared/lib';
// import { typographyVariants, TypographyVariant } from './config';

// interface TypographyProps {
//   variant?: TypographyVariant;
//   children: ReactNode;
//   className?: string;
//   tag?: ElementType; // Позволяет менять <span> на <h1> или <p>
// }

// export const Typography: FC<TypographyProps> = ({
//   variant = 'body1',
//   tag: Tag = 'span',
//   children,
//   className,
// }) => {
//   return (
//     <Tag className={cn(typographyVariants[variant], className)}>
//       {children}
//     </Tag>
//   );
// };