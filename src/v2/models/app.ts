/* eslint-disable no-use-before-define */
import { Network } from './network'

export type ArrayOfOneOrMore<T> = [T, ...T[]]

export enum GroupType {
  TOKEN = 'token',
  POSITION = 'contract-position',
}

export type AppGroup = {
  id: string
  type: GroupType
  label: string
  groupLabel?: string
  isHiddenFromExplore?: boolean
}

type ListView = { viewType: 'list'; label: string; groupIds: string[] };
type DropdownView = { viewType: 'dropdown'; label: string; options: (ListView | SplitView)[] };
type SplitView = {
  viewType: 'split'
  label: string
  views: (ListView | SplitView)[]
}

export type PresentationConfig = {
  tabs: (ListView | DropdownView | SplitView)[]
}

export type AppLinks = {
  learn?: string
  github?: string
  twitter?: string
  telegram?: string
  discord?: string
  medium?: string
}

export enum AppTag {
  ALGORITHMIC_STABLECOIN = 'algorithmic-stablecoin',
  ASSET_MANAGEMENT = 'asset-management',
  BONDS = 'bonds',
  BRIDGE = 'bridge',
  COLLATERALIZED_DEBT_POSITION = 'collateralized-debt-position',
  CROSS_CHAIN = 'cross-chain',
  DECENTRALIZED_EXCHANGE = 'decentralized-exchange',
  DERIVATIVES = 'derivatives',
  ELASTIC_FINANCE = 'elastic-finance',
  FARMING = 'farming',
  FUND_MANAGER = 'fund-manager',
  GAMING = 'gaming',
  INFRASTRUCTURE = 'infrastructure',
  INSURANCE = 'insurance',
  LAUNCHPAD = 'launchpad',
  LENDING = 'lending',
  LIQUIDITY_POOL = 'liquidity-pool',
  LIQUID_STAKING = 'liquid-staking',
  LOTTERY = 'lottery',
  MARGIN_TRADING = 'margin-trading',
  NFT_LENDING = 'nft-lending',
  NFT_MARKETPLACE = 'nft-marketplace',
  OPTIONS = 'options',
  PAYMENTS = 'payments',
  PERPETUALS_EXCHANGE = 'perpetuals-exchange',
  PREDICTION_MARKET = 'prediction-market',
  PRIVACY = 'privacy',
  REAL_ESTATE = 'real-estate',
  RESERVE_CURRENCY = 'reserve-currency',
  STABLECOIN = 'stablecoin',
  STAKING = 'staking',
  SYNTHETICS = 'synthetics',
  TOKENIZED_RISK = 'tokenized-risk',
  YIELD_AGGREGATOR = 'yield-aggregator',
  LIMIT_ORDER = 'limit-order',
}

export enum AppAction {
  VIEW = 'view',
  STAKE = 'stake',
  TRANSACT = 'transact',
}

interface AppSupportedNetwork {
  readonly network: Network
  readonly actions: AppAction[]
}

export enum AddressFormat {
  EVM = 'evm',
  BITCOIN = 'bitcoin',
}

interface AppDefinitionToken {
  address: string
  network: Network
}

export interface AppDefinition {
  readonly id: string
  readonly name: string
  readonly description?: string
  readonly groups: Record<string, AppGroup>
  readonly presentationConfig?: PresentationConfig
  readonly url: string
  readonly links: AppLinks
  readonly deprecated?: boolean
  readonly tags: ArrayOfOneOrMore<AppTag>
  readonly keywords: string[]
  readonly supportedNetworks: AppSupportedNetwork[]
  readonly compatibleAddressFormats?: { [N in Network]?: AddressFormat }
  readonly primaryColor: string
  readonly token: AppDefinitionToken | null
}
