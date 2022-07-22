import { Callback, Client, RequestConfig } from '../../client'
import * as Parameters from '../parameters'

/**
 * Returns an easy to submit transaction for exchanging assets.
 */
export class Exchange {
  constructor(private client: Client) { }

  /**
   * Exchange Price
   *
   * Returns data about the amount received if a trade would be made.
   * Should be called whenever a price needs to be calculated.
   */
  async getPrice<T>(params: Parameters.ExchangePrice, callback: Callback<T>): Promise<void>
  async getPrice<T>(params: Parameters.ExchangePrice, callback?: never): Promise<T>
  async getPrice<T>(params: Parameters.ExchangePrice, callback?: Callback<T> | never): Promise<T | void> {
    const config: RequestConfig = {
      url: '/v2/exchange/price',
      method: 'GET',
      params,
    }

    return this.client.sendRequest(config, callback)
  }

  /**
   * Exchange Quote
   *
   * Returns both the relative price for a trade as well as the call data used to submit a transaction for a trade.
   * Should only be called when a trade is ready to be submitted.
   */
  async getQuote<T>(params: Parameters.ExchangeQuote, callback: Callback<T>): Promise<void>
  async getQuote<T>(params: Parameters.ExchangeQuote, callback?: never): Promise<T>
  async getQuote<T>(params: Parameters.ExchangeQuote, callback?: Callback<T> | never): Promise<T | void> {
    const config: RequestConfig = {
      url: '/v2/exchange/quote',
      method: 'GET',
      params,
    }

    return this.client.sendRequest(config, callback)
  }

  /**
   * Supported Exchanges
   *
   * Returns the exchanges supported by Zapper API.
   */
  async supported<T>(callback: Callback<T>): Promise<void>
  async supported<T>(callback?: never): Promise<T>
  async supported<T>(callback?: Callback<T> | never): Promise<T | void> {
    const config: RequestConfig = {
      url: '/v2/exchange/supported',
      method: 'GET',
    }

    return this.client.sendRequest(config, callback)
  }
}
