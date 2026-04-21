import { Component } from "react";
import { FullPageError } from "../full-page-error/full-page-error";
import type { ReactNode } from "react";


export class ErrorBoundary extends Component<{ children: ReactNode }> {
  // error: Error — это ссылка на конструктор, а не null; исправлено на корректный начальный тип
  state = { hasError: false, error: null as Error | null };

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
          // error && toString() даёт string | false — не совместимо с string | undefined
          description={error?.toString()}
          actionLabel="Обновить"
          onBack={() => window.location.reload()}
        />
      );
    }

    return this.props.children;
  }
}
