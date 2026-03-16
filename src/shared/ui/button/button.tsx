import { Slot } from 'radix-ui';
import { cn } from '@/shared/lib';
import { buttonVariants } from './lib/variants';
import type { ComponentProps, FC } from 'react';
import type { VariantProps } from 'class-variance-authority';

interface ButtonProps
  extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    variant = 'default',
    size = 'default',
    asChild = false,
    ...othersProps
  } = props;

  const Comp = asChild ? Slot.Root : 'button';

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...othersProps}
    />
  );
};
