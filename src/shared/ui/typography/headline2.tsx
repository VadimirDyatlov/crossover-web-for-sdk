import type { FC, ReactNode } from 'react';

interface Headline2Props {
  children: ReactNode;
}

export const Headline2: FC<Headline2Props> = (props) => {
  const { children } = props;
  
  return (
    <span className="font-SBSansDisplay text-[30px] font-semibold leading-[36px] tracking-normal">
      {children}
    </span>
  );
};
