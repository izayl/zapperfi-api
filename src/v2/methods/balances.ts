import { Callback, Client, RequestConfig } from '../../client'
import * as Parameters from '../parameters'

/**
 * Gets balances of different supported applications for a specific address.
 */
export class Balances {
  constructor(private client: Client) { }

  /**
   * Gets the balances for given addresses.
   */
  async get<T>(params: Parameters.BalancesGet, callback: Callback<T>): Promise<void>
  async get<T>(params: Parameters.BalancesGet, callback?: never): Promise<T>
  async get<T>(params: Parameters.BalancesGet, callback?: Callback<T> | never): Promise<T | void> {
    const config: RequestConfig = {
      url: '/v2/balances',
      method: 'GET',
      params,
    }

    return this.client.sendRequest(config, callback)
  }

  /**
   * get wallets balance by appId
   */
  async getAppBalance<T>(parameters: Parameters.BalancesAppBalance, callback: Callback<T>): Promise<void>
  async getAppBalance<T>(parameters: Parameters.BalancesAppBalance, callback?: never): Promise<T>
  async getAppBalance<T>(parameters: Parameters.BalancesAppBalance, callback?: Callback<T> | never): Promise<T | void> {
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
  async supported<T>(params: Parameters.BalancesSupported, callback: Callback<T>): Promise<void>
  async supported<T>(params: Parameters.BalancesSupported, callback?: never): Promise<T>
  async supported<T>(params: Parameters.BalancesSupported, callback?: Callback<T> | never): Promise<T | void> {
    const config: RequestConfig = {
      url: '/v2/apps/balances/supported',
      method: 'GET',
      params,
    }

    return this.client.sendRequest(config, callback)
  }
}
