import type { ElementType, FC, ReactNode } from 'react';
import { cn } from '@/shared/lib';
import { typographyVariants } from './variants';

export type TypographyVariant = keyof typeof typographyVariants;

interface TypographyProps {
  children: ReactNode;
  variant?: TypographyVariant;
  className?: string;
  tag?: ElementType;
}

export const Typography: FC<TypographyProps> = ({
  variant = 'body1',
  tag: Tag = 'span',
  children,
  className,
}) => {
  return (
    <Tag className={cn(typographyVariants[variant], className)}>{children}</Tag>
  );
};
