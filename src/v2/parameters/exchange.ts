import { GasInfo, Network } from '../models'

export interface ExchangePrice extends Partial<GasInfo> {
  sellTokenAddress: string
  buyTokenAddress: string
  sellAmount: number | string

  ownerAddress?: string
  slippagePercentage?: number | string

  network?: Network
}

export interface ExchangeQuote extends Partial<GasInfo> {
  sellTokenAddress: string
  buyTokenAddress: string
  sellAmount: number | string

  ownerAddress?: string
  slippagePercentage?: number | string

  network?: Network
}
