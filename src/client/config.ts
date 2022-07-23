import type { AxiosRequestConfig } from 'axios'
import type EventSource from 'eventsource'

export type RequestConfig = AxiosRequestConfig

export interface BaseConfig {
  apiHost?: string
  apiKey: string
}

export interface Config extends BaseConfig {
  baseRequestConfig?: AxiosRequestConfig
}

export interface SSEConfig extends BaseConfig, EventSource.EventSourceInitDict {
  pathname?: string
  query?: any
}
