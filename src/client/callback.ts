import { AxiosError } from 'axios'

export type Callback<T> = (err: AxiosError | null, data?: T) => void;

export type SSECallbackData<T = any> = { type: 'partial'; payload: T } | { type: 'full'; payload: T[] }

export type SSECallback<T> = (
  err: MessageEvent | null,
  data?: SSECallbackData<T>
) => void
