import { Callback, Client, Config, RequestConfig, SSECallback, SSECallbackData, SSEClient } from '../../client'
import { PresentedBalancePayload } from '../models'
import * as Parameters from '../parameters'
import * as Responses from '../responses'

/**
 * Gets balances of different supported applications for a specific address.
 */
export class Balances {
  private eventSource: SSEClient
  constructor(private client: Client, config: Config) {
    this.eventSource = new SSEClient({
      apiHost: config.apiHost,
      apiKey: config.apiKey,
      headers: config.baseRequestConfig?.adapter,
    })
  }

  /**
   * Gets the balances for given addresses.
   */
  async get<T = PresentedBalancePayload>(params: Parameters.BalancesGet, callback: SSECallback<T>): Promise<void>
  async get<T = PresentedBalancePayload>(params: Parameters.BalancesGet, callback?: never): Promise<T[]>
  async get<T = PresentedBalancePayload>(params: Parameters.BalancesGet, callback?: SSECallback<T> | never): Promise<T[] | void> {
    this.eventSource.setup({
      pathname: '/v2/balances',
      query: params,
    })
    const data = [] as T[]

    const callbackResponseHandler = callback && ((data: SSECallbackData<T>): void => callback(null, data))
    let resolve: (value: T[]) => void
    let reject: (reason?: unknown) => void

    const defaultCallbackHandler: Promise<T[]> = new Promise((_resolve, _reject) => {
      resolve = _resolve
      reject = _reject
    })

    // const defaultCallbackHandler = new Promise(re) => (data: T[]): T[] => data

    this.eventSource.onError = (evt: MessageEvent) => {
      const callbackResponseHandler = callback && ((evt: MessageEvent) => callback(evt, undefined))
      const defaultCallbackHandler = (evt: MessageEvent) => reject(evt)

      const errorHandler = callbackResponseHandler ?? defaultCallbackHandler

      errorHandler(evt)
    }

    this.eventSource.addEventListener('balance', (evt: MessageEvent) => {
      callbackResponseHandler && callbackResponseHandler({
        type: 'partial',
        payload: JSON.parse(evt.data),
      })
      data.push(JSON.parse(evt.data))
    })

    this.eventSource.addEventListener('end', () => {
      this.eventSource.close()
      if (callbackResponseHandler) {
        callbackResponseHandler({
          type: 'full',
          payload: data,
        })
      } else {
        resolve(data)
      }
    })

    this.eventSource.create()

    if (!callbackResponseHandler) return defaultCallbackHandler
  }

  /**
   * get wallets balance by appId
   */
  async getAppBalance<T = Responses.BalancesAppBalanceResp>(parameters: Parameters.BalancesAppBalance, callback: Callback<T>): Promise<void>
  async getAppBalance<T = Responses.BalancesAppBalanceResp>(parameters: Parameters.BalancesAppBalance, callback?: never): Promise<T>
  async getAppBalance<T = Responses.BalancesAppBalanceResp>(parameters: Parameters.BalancesAppBalance, callback?: Callback<T> | never): Promise<T | void> {
    const { appId, ...params } = parameters
    const config: RequestConfig = {
      url: `/v2/apps/${appId}/balances`,
      method: 'GET',
      params,
    }

    return this.client.sendRequest(config, callback)
  }

  /**
   * get all the apps info have participated for given addresses
   */
  async supported<T = Responses.BalancesSupportedResp>(params: Parameters.BalancesSupported, callback: Callback<T>): Promise<void>
  async supported<T = Responses.BalancesSupportedResp>(params: Parameters.BalancesSupported, callback?: never): Promise<T>
  async supported<T = Responses.BalancesSupportedResp>(params: Parameters.BalancesSupported, callback?: Callback<T> | never): Promise<T | void> {
    const config: RequestConfig = {
      url: '/v2/apps/balances/supported',
      method: 'GET',
      params,
    }

    return this.client.sendRequest(config, callback)
  }
}
