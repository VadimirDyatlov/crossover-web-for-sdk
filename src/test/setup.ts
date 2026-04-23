import { afterAll, afterEach, beforeAll } from 'vitest';
import { server } from '@/shared/api/mocks/server';
import '@testing-library/jest-dom/vitest';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
