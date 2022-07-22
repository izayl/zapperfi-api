export interface GasInfo {
  /**
   * Gas price (wei)
   */
  gasPrice: number | string
  /**
   * Max gas fee (wei)
   */
  maxFeePerGas: number | string
  /**
   * Max priority gas fee (wei)
   */
  maxPriorityFeePerGas: number | string
}
