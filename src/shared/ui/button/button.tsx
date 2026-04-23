// import { Slot } from 'radix-ui';
// import { cn } from '@/shared/lib';
// import { buttonVariants } from './lib/variants';
// import type { ComponentProps, FC } from 'react';
// import type { VariantProps } from 'class-variance-authority';

import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@/shared/lib';

// interface ButtonProps
//   extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
//   asChild?: boolean;
// }

// export const Button: FC<ButtonProps> = (props) => {
//   const {
//     className,
//     variant = 'default',
//     size = 'default',
//     asChild = false,
//     ...othersProps
//   } = props;

//   const Comp = asChild ? Slot.Root : 'button';

//   return (
//     <Comp
//       data-slot="button"
//       data-variant={variant}
//       data-size={size}
//       className={cn(buttonVariants({ variant, size, className }))}
//       {...othersProps}
//     />
//   );
// };

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // Оставляем простые пропсы для самых частых случаев
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'default' | 'sm' | 'icon';
}

export const Button = ({
  ref,
  className,
  variant = 'primary',
  size = 'default',
  ...props
}: ButtonProps & { ref?: React.RefObject<HTMLButtonElement | null> }) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none select-none touch-manipulation';

  const variants = {
    primary: 'bg-[var(--primary)] text-[var(--primary-foreground)]',
    secondary: 'bg-[var(--secondary)] text-[var(--secondary-foreground)]',
    // ghost: "bg-transparent text-[var(--foreground)]",
    ghost: 'bg-transparent',
    outline: 'border border-[var(--border)] bg-transparent text-[var(--foreground)]',
  };

  const sizes = {
    default: 'h-[44px] px-6 rounded-[var(--radius)] text-base', // Используем твой --radius (10px)
    sm: 'h-10 px-4 rounded-[calc(var(--radius)*0.8)] text-sm',
    icon: 'size-11 rounded-full',
  };

  return (
    <button
      ref={ref}
      type={props.type || 'button'}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    />
  );
};
