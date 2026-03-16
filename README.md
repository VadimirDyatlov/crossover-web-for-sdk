React 19 приложение на Vite, TypeScript и Tailwind CSS v4.

## Требования

- Node.js >= 20.x
- npm >= 10.x

## Установка

```bash
npm install
```

## Команды

```bash
npm run dev          # Запуск dev-сервера
npm run build        # Сборка для production
npm run lint         # Проверка ESLint
npm run test         # Тесты в watch-режиме
npm run test:run     # Однократный запуск тестов
npm run test:coverage # Тесты с покрытием
```

## Стек

- **React 19** с React Compiler
- **Vite 7** — сборщик
- **TypeScript 5.9**
- **Tailwind CSS v4** — стили
- **Zustand** — state management
- **Vitest** + React Testing Library — тесты
- **MSW** — мокирование API

## Структура проекта

```
src/
├── app/                    # Инициализация приложения
├── pages/                  # Страницы
├── widgets/                # Самостоятельные блоки
├── features/               # Пользовательские сценарии
├── entities/               # Бизнес-сущности
├── shared/                 # Переиспользуемый код
│   ├── ui/                 # UI-компоненты
│   ├── lib/                # Утилиты
│   ├── api/                # API клиенты
```
