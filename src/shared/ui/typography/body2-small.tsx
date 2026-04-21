import type { FC, ReactNode } from 'react';

interface Body2SmallProps {
  children: ReactNode;
}

export const Body2Small: FC<Body2SmallProps> = (props) => {
  const { children } = props;

  return (
    <span className="font-SBSans text-[13px] font-medium leading-[18px] tracking-[-0.023em]">
      {children}
    </span>
  );
};
