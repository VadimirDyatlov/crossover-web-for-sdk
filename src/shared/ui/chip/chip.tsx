import { cn } from '@/shared/lib';
import type { FC } from 'react';

interface ChipProps {
  label?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Chip: FC<ChipProps> = ({
  label,
  icon,
  onClick,
  disabled = false,
  className = '',
  children,
}) => {
  const isClickable = onClick && !disabled;
  const content = children || label;

  return (
    <div
      className={cn(
        'inline-flex items-center justify-center gap-1 h-[30px] px-[10px] py-1.5 rounded-[30px]',
        'bg-[#f3f4f6] text-[#1f2937] text-[14px] font-medium whitespace-nowrap',
        isClickable && 'cursor-pointer active:scale-95 transition-transform',
        disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
        className,
      )}
      onClick={isClickable ? onClick : undefined}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      {content}
    </div>
  );
};
