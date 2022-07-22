import { Callback, Client, RequestConfig } from '../../client'
import * as Parameters from '../parameters'

/**
 * Miscellaneous Data Endpoints
 *
 * General data endpoints.
 */
export class Misc {
  constructor(private client: Client) { }

  /**
   * Tokens Prices
   *
   * Retrieve supported tokens and their prices
   */
  async prices<T>(params: Parameters.MiscPrices, callback: Callback<T>): Promise<void>
  async prices<T>(params: Parameters.MiscPrices, callback?: never): Promise<T>
  async prices<T>(params: Parameters.MiscPrices, callback?: Callback<T> | never): Promise<T | void> {
    const config: RequestConfig = {
      url: '/v2/prices',
      method: 'GET',
      params: {
        network: params.network,
      },
    }

    return this.client.sendRequest(config, callback)
  }

  /**
   * Token Prices
   *
   * Retrieve given token and its prices
   */
  async getTokenPrices<T>(params: Parameters.MiscTokenPrices, callback: Callback<T>): Promise<void>
  async getTokenPrices<T>(params: Parameters.MiscTokenPrices, callback?: never): Promise<T>
  async getTokenPrices<T>(params: Parameters.MiscTokenPrices, callback?: Callback<T> | never): Promise<T | void> {
    const config: RequestConfig = {
      url: `/v2/prices/${params.tokenAddress}`,
      method: 'GET',
      params: {
        network: params.network,
        timeFrame: params.timeFrame,
        currency: params.currency,
      },
    }

    return this.client.sendRequest(config, callback)
  }

  /**
   * Gas Price
   *
   * Retrieve a gas price aggregated from multiple different sources
   */
  async getGasPrices<T>(params: Parameters.MiscGasPrices, callback: Callback<T>): Promise<void>
  async getGasPrices<T>(params: Parameters.MiscGasPrices, callback?: never): Promise<T>
  async getGasPrices<T>(params: Parameters.MiscGasPrices, callback?: Callback<T> | never): Promise<T | void> {
    const config: RequestConfig = {
      url: '/v2/gas-prices',
      method: 'GET',
      params,
    }

    return this.client.sendRequest(config, callback)
  }
}
