import { GasInfo, Network, ZapType } from '../models'

export interface ZapInSupported {
  type: ZapType
}

export interface ZapInApprovalState {
  type: ZapType
  appId: string
  ownerAddress: string
  sellTokenAddress: string
  amount?: string | number
  network?: Network
}

export interface ZapInApprovalTransaction extends Partial<GasInfo> {
  type: ZapType
  appId: string

  ownerAddress: string
  sellTokenAddress: string

  amount?: string | number
  allowInfinite?: boolean

  network?: Network
}

export interface ZapInTransaction extends Partial<GasInfo> {
  type: ZapType
  appId: string

  ownerAddress: string
  sellAmount: string | number
  sellTokenAddress: string
  poolAddress: string
  payoutTokenAddress: string
  slippagePercentage: number

  network?: Network

  affiliateAddress?: string

  partnerId: string
}
