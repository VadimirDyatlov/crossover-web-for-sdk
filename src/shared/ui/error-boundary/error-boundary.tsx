import { Component } from "react";
import { FullPageError } from "../full-page-error/full-page-error";
import type { ReactNode } from "react";


export class ErrorBoundary extends Component<{ children: ReactNode }> {
  state = { hasError: false, error: Error };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    const { hasError, error } = this.state;

    if (hasError) {
      return (
        <FullPageError
          isShowIcon={true}
          title="Упс! Ошибка"
          description={error && error.toString()}
          actionLabel="Обновить"
          onBack={() => window.location.reload()}
        />
      );
    }

    return this.props.children;
  }
}
