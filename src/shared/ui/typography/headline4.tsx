import type { FC, ReactNode } from 'react';

interface Headline4Props {
  children: ReactNode;
}

export const Headline4: FC<Headline4Props> = (props) => {
  const { children } = props;
  
  return (
    <span className="font-SBSansDisplay text-[17px] font-semibold leading-[20px] tracking-normal">
      {children}
    </span>
  );
};
