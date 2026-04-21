import type { FC, ReactNode } from 'react';

interface Headline5Props {
  children: ReactNode;
}

export const Headline5: FC<Headline5Props> = (props) => {
  const { children } = props;

  return (
    <span className="font-SBSansDisplay text-[28px] font-semibold leading-[20px] tracking-normal">
      {children}
    </span>
  );
};
