import type { AxiosRequestConfig } from 'axios'
import type { Callback } from './callback'

export interface Client {
  sendRequest<T>(requestConfig: AxiosRequestConfig, callback?: never): Promise<T>
  sendRequest<T>(requestConfig: AxiosRequestConfig, callback?: Callback<T>): Promise<void>
}
