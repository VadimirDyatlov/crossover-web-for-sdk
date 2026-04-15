import { Component } from "react";
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
        // TODO: Такого экрана нет в макетах)) Что тут отрисовывать?
        <div className="h-[100svh] flex flex-col items-center justify-center p-6 text-center">
          <h2 className="text-lg font-bold">Упс! Ошибка</h2>
          <p>{error && error.toString()}</p>
          <button
            className="mt-4 px-4 py-2 bg-black text-white rounded-xl active:scale-95"
            onClick={() => window.location.reload()}
          >
            Обновить
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
