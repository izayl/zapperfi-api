/* eslint-disable no-use-before-define */
import { Address } from './address'
import { DefaultDataProps, MetadataItem, WithMetaType } from './display'
import { Network } from './network'
import { AppTokenPosition, ContractPosition, NonFungibleToken } from './position'
import { BaseToken, NonFungibleTokenBreakdown, PositionBreakdown, TokenBreakdown } from './token'

export type CategoryNames =
  | 'claimable'
  | 'debt'
  | 'deposits'
  | 'locked'
  | 'nft'
  | 'vesting'
  | 'wallet';

export type BalancePayload = {
  [category_name in CategoryNames]:
  | {
    [token_key: string]:
    | PositionBreakdown
    | NonFungibleTokenBreakdown
    | TokenBreakdown
  } | Record<string, unknown>
}

export type PartialTotal = {
  key: string
  type: 'app-token' | 'non-fungible-token'
  network: string
  balanceUSD: number
};

export type TotalsPayload = PartialTotal[]

export type AppPayload = {
  appId: string
  network: string
  data: Array<PositionBreakdown | NonFungibleTokenBreakdown | TokenBreakdown>
  displayProps: {
    appName: string
    images: Array<string>
  }
  meta: {
    total: number
  }
}

export type PresentedBalancePayload = {
  appId: 'tokens' | 'nft' | string
  network: Network | string
  addresses: string[]
  balance: BalancePayload
  totals: TotalsPayload
  app?: AppPayload
}

//  POSITION BALANCES
export type WithTokenBalance<T> = T & {
  balance: number
  balanceRaw: string
  balanceUSD: number
};

export type BaseTokenBalance = WithTokenBalance<BaseToken>;

export type NonFungibleTokenBalance = WithTokenBalance<NonFungibleToken>;

export type AppTokenPositionBalance<T = DefaultDataProps> = Omit<WithTokenBalance<AppTokenPosition<T>>, 'tokens'> & {
  tokens: (BaseTokenBalance | AppTokenPositionBalance | NonFungibleTokenBalance)[]
};

type NewType = TokenBalance;

export interface ContractPositionBalance<T = DefaultDataProps> extends ContractPosition<T> {
  tokens: WithMetaType<NewType>[]
  balanceUSD: number
}

export type TokenBalance = BaseTokenBalance | AppTokenPositionBalance | NonFungibleTokenBalance;
export type PositionBalance<T = DefaultDataProps> = ContractPositionBalance<T> | AppTokenPositionBalance<T>;

export type ProductItem = {
  label: string
  assets: (AppTokenPositionBalance | ContractPositionBalance)[]
  meta: MetadataItemWithLabel[]
}

export type MetadataItemWithLabel = MetadataItem & { label: string };

export interface TokenBalanceResponse {
  products: ProductItem[]
  meta: MetadataItemWithLabel[]
  error?: string
}

export type TokenSupportApp = {
  appId: string
  meta: {
    label: string
    img: string
    supportedActions: Array<'view' | 'transact' | string>
    tags: string[]
  }
}
export interface TokenSupportByNetwork {
  network: Network
  apps: TokenSupportApp[]
}
