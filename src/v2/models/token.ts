import { ContractType } from './contract'
import { Network } from './network'

/* eslint-disable no-use-before-define */
type MetaType =
  | 'wallet'
  | 'supplied'
  | 'borrowed'
  | 'claimable'
  | 'vesting'
  | 'nft'
  | null;

type DisplayItem = {
  type: string
  value: string | number
};

export type NonFungibleTokenBreakdown = {
  type: 'nft'
  appId: string | null
  metaType: MetaType
  address: string
  balanceUSD: number
  network: string
  contractType: string
  breakdown: Array<PositionBreakdown | NonFungibleTokenBreakdown | TokenBreakdown>
  assets: Array<{
    assetImg: string
    assetName: string
    balance: number
    balanceUSD: number
    tokenId: string
  }>
  context: {
    amountHeld: number
    floorPrice: number
    holdersCount: number
    incomplete: boolean
    openseaId: string
  }
  displayProps: {
    label: string
    secondaryLabel: DisplayItem | null
    tertiaryLabel: DisplayItem | null
    profileBanner: string
    profileImage: string
    featuredImage: string
    featuredImg: string
    images: Array<string>
    stats: Array<{ label: DisplayItem; value: DisplayItem }>
    info: Array<{ label: DisplayItem; value: DisplayItem }>
    collectionImages: Array<string>
    balanceDisplayMode: string
  }
}

export type TokenBreakdown = {
  type: 'token'
  appId: string | null
  metaType: MetaType
  address: string
  balanceUSD: number
  network: string
  contractType: string
  breakdown: Array<PositionBreakdown | NonFungibleTokenBreakdown | TokenBreakdown>
  context: {
    balance: number
    balanceRaw: string
    symbol: string
    price: number
    decimals: number
  }
  displayProps: {
    label: string
    secondaryLabel: DisplayItem | null
    tertiaryLabel: DisplayItem | null
    images: string[]
    stats: Array<{ label: DisplayItem; value: DisplayItem }>
    info: Array<{ label: DisplayItem; value: DisplayItem }>
    balanceDisplayMode: string
  }
}

export type PositionBreakdown = {
  type: 'position'
  appId: string | null
  metaType: MetaType
  address: string
  balanceUSD: number
  network: string
  contractType: string
  breakdown: Array<
    PositionBreakdown | NonFungibleTokenBreakdown | TokenBreakdown
  >
  displayProps: {
    label: string
    secondaryLabel: DisplayItem | null
    tertiaryLabel: DisplayItem | null
    images: Array<string>
    stats: Array<{ label: DisplayItem; value: DisplayItem }>
    info: Array<{ label: DisplayItem; value: DisplayItem }>
    balanceDisplayMode: string
  }
}

export interface AbstractToken {
  address: string
  network: Network
  price: number
  symbol: string
  decimals: number
}

export interface BaseToken extends AbstractToken {
  type: ContractType.BASE_TOKEN
}
