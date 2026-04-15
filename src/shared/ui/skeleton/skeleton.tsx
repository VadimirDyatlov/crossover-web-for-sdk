import { cn } from '@/shared/lib';
import type { FC } from 'react';

interface SkeletonProps {
  height?: string;
  width?: string;
  radius?: string;
  className?: string;
}

// TODO: Доработать
export const Skeleton: FC<SkeletonProps> = (props) => {
  const { width, height, radius, className } = props;

  const style = {
    width: width || '100%',
    height: height || '50px',
    borderRadius: radius,
  };

  return (
    <div
      style={style}
      className={cn('bg-black/10 animate-pulse rounded-xl', className)}
    />
  );
};
