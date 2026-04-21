import type { FC, ReactNode } from 'react';

interface Body5SecondaryProps {
  children: ReactNode;
}

export const Body5Secondary: FC<Body5SecondaryProps> = (props) => {
  const { children } = props;

  return (
    <span className="font-SBSans text-[12px] font-medium leading-[16px] tracking-[-0.023em] text-[rgba(18,18,18,0.55)]">
      {children}
    </span>
  );
};
