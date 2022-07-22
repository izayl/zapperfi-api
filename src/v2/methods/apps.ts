import { Callback, Client, RequestConfig } from '../../client'
import * as Parameters from '../parameters'

/**
 * Get supported applications.
 */
export class Apps {
  constructor(private client: Client) { }

  /**
   * Application Positions
   *
   * Retrieve positions (non-tokenized) for a given application
   */
  async getPositions<T>(params: Parameters.AppPositions, callback: Callback<T>): Promise<void>
  async getPositions<T>(params: Parameters.AppPositions, callback?: never): Promise<T>
  async getPositions<T>(params: Parameters.AppPositions, callback?: Callback<T> | never): Promise<T | void> {
    const config: RequestConfig = {
      url: `/v2/apps/${params.appId}/positions`,
      method: 'GET',
      params: {
        network: params.network,
        groupId: params.groupId,
      },
    }

    return this.client.sendRequest(config, callback)
  }

  /**
   * Application Tokens
   *
   * Retrieve tokens for a given application
   */
  async getTokens<T>(params: Parameters.AppTokens, callback: Callback<T>): Promise<void>
  async getTokens<T>(params: Parameters.AppTokens, callback?: never): Promise<T>
  async getTokens<T>(params: Parameters.AppTokens, callback?: Callback<T> | never): Promise<T | void> {
    const config: RequestConfig = {
      url: `/v2/apps/${params.appId}/tokens`,
      method: 'GET',
      params: {
        network: params.network,
        groupId: params.groupId,
      },
    }

    return this.client.sendRequest(config, callback)
  }

  /**
   * Applications
   *
   * Retrieve all supported applications info
   */
  async supported<T>(callback: Callback<T>): Promise<void>
  async supported<T>(callback?: never): Promise<T>
  async supported<T>(callback?: Callback<T> | never): Promise<T | void> {
    const config: RequestConfig = {
      url: '/v2/apps',
      method: 'GET',
    }

    return this.client.sendRequest(config, callback)
  }

  /**
   * Application
   *
   * Retrieve application info by appId
   */
  async get<T>(params: Parameters.AppGet, callback: Callback<T>): Promise<void>
  async get<T>(params: Parameters.AppGet, callback?: never): Promise<T>
  async get<T>(params: Parameters.AppGet, callback?: Callback<T> | never): Promise<T | void> {
    const config: RequestConfig = {
      url: `/v2/apps/${params.appId}`,
      method: 'GET',
    }

    return this.client.sendRequest(config, callback)
  }
}
