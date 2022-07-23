import { Callback, Client, RequestConfig } from '../../client'
import * as Parameters from '../parameters'

/**
 * Get Ethereum NFT balances for addresses.
 */
export class NFT {
  constructor(private client: Client) { }

  async getNetWorth<T>(params: Parameters.NFTNetWorth, callback: Callback<T>): Promise<void>
  async getNetWorth<T>(params: Parameters.NFTNetWorth, callback?: never): Promise<T>
  async getNetWorth<T>(params: Parameters.NFTNetWorth, callback?: Callback<T> | never): Promise<T | void> {
    const config: RequestConfig = {
      url: '/v2/nft/balances/net-worth',
      method: 'GET',
      params,
    }

    return this.client.sendRequest(config, callback)
  }

  async getCollections<T>(params: Parameters.NFTCollections, callback: Callback<T>): Promise<void>
  async getCollections<T>(params: Parameters.NFTCollections, callback?: never): Promise<T>
  async getCollections<T>(params: Parameters.NFTCollections, callback?: Callback<T> | never): Promise<T | void> {
    const config: RequestConfig = {
      url: '/v2/nft/balances/collections',
      method: 'GET',
      params,
    }

    return this.client.sendRequest(config, callback)
  }

  async getCollectionsTotals<T>(params: Parameters.NFTCollectionsTotals, callback: Callback<T>): Promise<void>
  async getCollectionsTotals<T>(params: Parameters.NFTCollectionsTotals, callback?: never): Promise<T>
  async getCollectionsTotals<T>(params: Parameters.NFTCollectionsTotals, callback?: Callback<T> | never): Promise<T | void> {
    const config: RequestConfig = {
      url: '/v2/nft/balances/collections-totals',
      method: 'GET',
      params,
    }

    return this.client.sendRequest(config, callback)
  }

  async getTokens<T>(params: Parameters.NFTTokens, callback: Callback<T>): Promise<void>
  async getTokens<T>(params: Parameters.NFTTokens, callback?: never): Promise<T>
  async getTokens<T>(params: Parameters.NFTTokens, callback?: Callback<T> | never): Promise<T | void> {
    const config: RequestConfig = {
      url: '/v2/nft/balances/tokens',
      method: 'GET',
      params,
    }

    return this.client.sendRequest(config, callback)
  }

  async getTokensTotals<T>(params: Parameters.NFTTokensTotals, callback: Callback<T>): Promise<void>
  async getTokensTotals<T>(params: Parameters.NFTTokensTotals, callback?: never): Promise<T>
  async getTokensTotals<T>(params: Parameters.NFTTokensTotals, callback?: Callback<T> | never): Promise<T | void> {
    const config: RequestConfig = {
      url: '/v2/nft/balances/tokens-totals',
      method: 'GET',
      params,
    }

    return this.client.sendRequest(config, callback)
  }
}
