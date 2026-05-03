import { getCommonHeaders } from './config';
import { mswReadyPromise } from './msw-ready';

const ready =
  import.meta.env.DEV || import.meta.env.VITE_ENABLE_MSW === 'true'
    ? mswReadyPromise
    : Promise.resolve();

export const request = async <
  T,
  P extends object = Record<string, unknown>,
>(
  endpoint: string,
  params?: P,
  options: RequestInit = {},
): Promise<T> => {
  await ready;

  const searchParams = new URLSearchParams();
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        searchParams.append(key, String(value));
      }
    });
  }

  const queryString = searchParams.toString();
  const url = `/api${endpoint}${queryString ? `?${queryString}` : ''}`;

  const headers = {
    ...getCommonHeaders(),
    ...options.headers,
  };

  const response = await fetch(url, {
    method: 'GET',
    ...options,
    headers,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  try {
    const text = await response.text();
    return text ? JSON.parse(text) : ({} as T);
  } catch {
    throw new Error('Failed to parse JSON response');
  }
};
