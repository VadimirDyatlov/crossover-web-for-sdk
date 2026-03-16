import type { FC, ReactNode } from 'react';

interface Headline3Props {
  children: ReactNode;
}

export const Headline3: FC<Headline3Props> = (props) => {
  const { children } = props;
  
  return (
    <span className="font-SBSansDisplay text-[20px] font-semibold leading-[24px] tracking-normal">
      {children}
    </span>
  );
};
