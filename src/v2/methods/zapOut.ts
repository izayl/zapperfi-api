import { Callback, Client, RequestConfig } from '../../client'
import * as Parameters from '../parameters'

/**
 * Zap Out
 *
 * Endpoints for creating transactions for removing liquidity from an application.
 */
export class ZapOut {
  constructor(private client: Client) { }

  /**
   * Retrieve Supported Zap Outs
   *
   * Provides a list of networks to app IDs that are supported by the Zap Out routes.
   */
  async supported<T>(parameters: Parameters.ZapOutSupported, callback: Callback<T>): Promise<void>
  async supported<T>(parameters: Parameters.ZapOutSupported, callback?: never): Promise<T>
  async supported<T>(parameters: Parameters.ZapOutSupported, callback?: Callback<T> | never): Promise<T | void> {
    const { type } = parameters
    const config: RequestConfig = {
      url: `/v2/zap-out/${type}/supported`,
      method: 'GET',
    }

    return this.client.sendRequest(config, callback)
  }

  /**
   * Retrieve Zap Out Approval State
   *
   * Retrieves an ERC20 approval status for an application zap-out
   */
  async getApprovalState<T>(parameters: Parameters.ZapOutApprovalState, callback: Callback<T>): Promise<void>
  async getApprovalState<T>(parameters: Parameters.ZapOutApprovalState, callback?: never): Promise<T>
  async getApprovalState<T>(parameters: Parameters.ZapOutApprovalState, callback?: Callback<T> | never): Promise<T | void> {
    const { type, appId, ...params } = parameters

    const config: RequestConfig = {
      url: `/v2/zap-out/${type}/${appId}/approval-state`,
      method: 'GET',
      params,
    }

    return this.client.sendRequest(config, callback)
  }

  /**
   * Retrieve Zap Out Approval Transaction
   *
   * Builds an ERC20 approval transaction for an application zap-out
   */
  async getApprovalTransaction<T>(parameters: Parameters.ZapOutApprovalTransaction, callback: Callback<T>): Promise<void>
  async getApprovalTransaction<T>(parameters: Parameters.ZapOutApprovalTransaction, callback?: never): Promise<T>
  async getApprovalTransaction<T>(parameters: Parameters.ZapOutApprovalTransaction, callback?: Callback<T> | never): Promise<T | void> {
    const { type, appId, ...params } = parameters

    const config: RequestConfig = {
      url: `/v2/zap-out/${type}/${appId}/approval-transaction`,
      method: 'GET',
      params,
    }

    return this.client.sendRequest(config, callback)
  }

  /**
   * Zap Out Transaction
   *
   * Builds a zap-out transaction for usage with Web3, complete with best swap from 0x.
   */
  async getTransaction<T>(parameters: Parameters.ZapOutTransaction, callback: Callback<T>): Promise<void>
  async getTransaction<T>(parameters: Parameters.ZapOutTransaction, callback?: never): Promise<T>
  async getTransaction<T>(parameters: Parameters.ZapOutTransaction, callback?: Callback<T> | never): Promise<T | void> {
    const { type, appId, ...params } = parameters

    const config: RequestConfig = {
      url: `/v2/zap-out/${type}/${appId}/transaction`,
      method: 'GET',
      params,
    }

    return this.client.sendRequest(config, callback)
  }
}
