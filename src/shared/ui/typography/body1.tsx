import type { FC, ReactNode } from 'react';

interface Body1Props {
  children: ReactNode;
}

export const Body1: FC<Body1Props> = (props) => {
  const { children } = props;
  
  return (
    <span className="font-SBSans text-[15px] font-medium leading-[20px] tracking-[-0.023em]">
      {children}
    </span>
  );
};
