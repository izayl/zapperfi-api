import type { AxiosRequestConfig } from 'axios'

export type RequestConfig = AxiosRequestConfig

export interface Config {
  apiHost?: string
  apiKey: string
  baseRequestConfig?: AxiosRequestConfig
}
