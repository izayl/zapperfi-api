import { Callback, Client, RequestConfig } from '../../client'
import * as Parameters from '../parameters'

/**
 * Historical Transactions
 *
 * Data on past transactions for a specific address.
 */
export class Transactions {
  constructor(private client: Client) { }

  /**
   * Historical Transactions
   *
   * Data on past transactions for addresses
   */
  async get<T>(params: Parameters.Transactions, callback: Callback<T>): Promise<void>
  async get<T>(params: Parameters.Transactions, callback?: never): Promise<T>
  async get<T>(params: Parameters.Transactions, callback?: Callback<T> | never): Promise<T | void> {
    const config: RequestConfig = {
      url: '/v2/transactions',
      method: 'GET',
      params: {
        address: params.address,
        addresses: params.addresses,
        network: params.network,
      },
    }

    return this.client.sendRequest(config, callback)
  }
}
