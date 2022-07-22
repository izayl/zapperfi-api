import { GasInfo, Network, ZapType } from '../models'

export interface ZapOutSupported {
  type: ZapType
}

export interface ZapOutApprovalState {
  type: ZapType
  appId: string
  ownerAddress: string
  sellTokenAddress: string
  amount?: string | number
  network?: Network
}

export interface ZapOutApprovalTransaction extends Partial<GasInfo> {
  type: ZapType
  appId: string

  ownerAddress: string
  sellTokenAddress: string

  amount?: string | number
  allowInfinite?: boolean

  network?: Network
}

export interface ZapOutTransaction extends Partial<GasInfo>{
  type: ZapType
  appId: string

  ownerAddress: string
  sellAmount: string | number
  toTokenAddress: string
  poolAddress: string
  slippagePercentage: number

  signature?: string
  network?: Network

  affiliateAddress?: string
}
