import { Callback, Client, RequestConfig } from '../../client'
import * as Parameters from '../parameters'

/**
 * Zap In
 *
 * Endpoints for creating transactions for adding liquidity to different applications.
 */
export class ZapIn {
  constructor(private client: Client) { }

  /**
   * Retrieve Supported Zap Ins
   *
   * Provides a list of networks to app IDs that are supported by the Zap In routes.
   */
  async supported<T>(parameters: Parameters.ZapInSupported, callback: Callback<T>): Promise<void>
  async supported<T>(parameters: Parameters.ZapInSupported, callback?: never): Promise<T>
  async supported<T>(parameters: Parameters.ZapInSupported, callback?: Callback<T> | never): Promise<T | void> {
    const { type } = parameters
    const config: RequestConfig = {
      url: `/v2/zap-in/${type}/supported`,
      method: 'GET',
    }

    return this.client.sendRequest(config, callback)
  }

  /**
   * Retrieve Zap In Approval State
   *
   * Retrieves an ERC20 approval status for an application zap-in
   */
  async getApprovalState<T>(parameters: Parameters.ZapInApprovalState, callback: Callback<T>): Promise<void>
  async getApprovalState<T>(parameters: Parameters.ZapInApprovalState, callback?: never): Promise<T>
  async getApprovalState<T>(parameters: Parameters.ZapInApprovalState, callback?: Callback<T> | never): Promise<T | void> {
    const { type, appId, ...params } = parameters

    const config: RequestConfig = {
      url: `/v2/zap-in/${type}/${appId}/approval-state`,
      method: 'GET',
      params,
    }

    return this.client.sendRequest(config, callback)
  }

  /**
   * Retrieve Zap In Approval Transaction
   *
   * Builds an ERC20 approval transaction for an application zap-in
   */
  async getApprovalTransaction<T>(parameters: Parameters.ZapInApprovalTransaction, callback: Callback<T>): Promise<void>
  async getApprovalTransaction<T>(parameters: Parameters.ZapInApprovalTransaction, callback?: never): Promise<T>
  async getApprovalTransaction<T>(parameters: Parameters.ZapInApprovalTransaction, callback?: Callback<T> | never): Promise<T | void> {
    const { type, appId, ...params } = parameters

    const config: RequestConfig = {
      url: `/v2/zap-in/${type}/${appId}/approval-transaction`,
      method: 'GET',
      params,
    }

    return this.client.sendRequest(config, callback)
  }

  /**
   * Zap In Transaction
   *
   * Builds a zap-in transaction for usage with Web3, complete with best swap from 0x.
   */
  async getTransaction<T>(parameters: Parameters.ZapInTransaction, callback: Callback<T>): Promise<void>
  async getTransaction<T>(parameters: Parameters.ZapInTransaction, callback?: never): Promise<T>
  async getTransaction<T>(parameters: Parameters.ZapInTransaction, callback?: Callback<T> | never): Promise<T | void> {
    const { type, appId, ...params } = parameters

    const config: RequestConfig = {
      url: `/v2/zap-in/${type}/${appId}/transaction`,
      method: 'GET',
      params,
    }

    return this.client.sendRequest(config, callback)
  }
}
