import type { FC, ReactNode } from 'react';
import { cn } from '@/shared/lib';

interface SkeletonProps {
  height?: string;
  width?: string;
  radius?: string;
  className?: string;
  children?: ReactNode;
}

// TODO: Доработать
export const Skeleton: FC<SkeletonProps> = (props) => {
  const { width, height, radius, className, children } = props;

  const style = {
    width: width || '100%',
    height: height || '50px',
    borderRadius: radius,
  };

  return (
    <div
      style={style}
      className={cn(
        'relative',
        'bg-[var(--sk-color)] animate-pulse overflow-hidden',
        !radius && 'rounded-xl',
        className,
      )}
    >
      {children && (
        <div className="absolute inset-0 flex items-center justify-center ">
          {children}
        </div>
      )}
    </div>
  );
};
