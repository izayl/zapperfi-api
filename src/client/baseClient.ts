import type { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'
import axios from 'axios'
import type { Callback } from './callback'
import type { Client } from './client'
import type { Config } from './config'

export class BaseClient implements Client {
  private instance: AxiosInstance

  constructor(protected readonly config: Config) {
    this.instance = axios.create({
      ...config.baseRequestConfig,
      baseURL: config.apiHost,
      headers: {
        ...config.baseRequestConfig?.headers,
      },
      auth: {
        username: config.apiKey,
        password: '',
      },
    })
  }

  async sendRequest<T>(requestConfig: AxiosRequestConfig, callback?: never): Promise<T>
  async sendRequest<T>(requestConfig: AxiosRequestConfig, callback?: Callback<T>): Promise<void>
  async sendRequest<T>(requestConfig: AxiosRequestConfig, callback?: Callback<T> | never): Promise<void | T> {
    try {
      const response = await this.instance.request<T>(requestConfig)

      const callbackResponseHandler = callback && ((data: T): void => callback(null, data))
      const defaultCallbackHandler = (data: T): T => data

      const responseHandler = callbackResponseHandler ?? defaultCallbackHandler

      return responseHandler(response.data)
    } catch (error: any) {
      const err = axios.isAxiosError(error) && error.response ? error.response.data : error

      const callbackResponseHandler = callback && ((e: AxiosError) => callback(e, undefined))
      const defaultCallbackHandler = (error: unknown) => { throw error }

      const errorHandler = callbackResponseHandler ?? defaultCallbackHandler

      return errorHandler(err)
    }
  }
}
