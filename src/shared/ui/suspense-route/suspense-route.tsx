import type { ComponentType, FC, ReactNode } from 'react';
import type { RouteProps } from 'wouter';
import { Suspense } from 'react';
import { Route } from 'wouter';

interface SuspenseRouteProps extends RouteProps {
  Component: ComponentType;
  fallback: ReactNode;
}

export const SuspenseRoute: FC<SuspenseRouteProps> = (props) => {
  const { path, Component, fallback, ...rest } = props;

  return (
    <Route path={path} {...rest}>
      <Suspense fallback={fallback}>
        <Component />
      </Suspense>
    </Route>
  );
};
