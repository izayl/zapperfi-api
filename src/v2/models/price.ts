import { Address } from './address'
import { Network } from './network'

export interface TokenPrice {
  id: string
  networkId: number
  address: Address
  name: string
  symbol: string
  decimals: 18
  coingeckoId: string
  status: 'approved' | string
  hide: boolean
  canExchange: boolean
  updatedAt: string
  createdAt: string
  price: 1.14
  totalSupply: string
  networkEnumValue: string
  type: 'base-token' | string
  network: Network
}

export interface TokenFramePrices {
  coingeckoId: string
  name: string
  symbol: string
  link: string
  address: string
  ath: {
    date: Record<string, string>
    price: Record<string, number>
    percent: Record<string, number>
  }
  atl:{
    date: Record<string, string>
    price: Record<string, number>
    percent: Record<string, number>
  }
  marketCap: Record<string, number>
  marketCapRank: number
  circulatingSupply: number
  volume24h: Record<string, number>
  priceChange24h: number
  priceChangePercentage24h: number
  priceChangePercentage7d: number
  priceChangePercentage30d: number
  priceChangePercentage1y: number
  prices: number[][]
}

export interface BaseGasPrice<T> {
  standard: T
  fast: T
  instant: T
}

type EIP1559GasPriceInfo = {
  baseFeePerGas: number
  maxPriorityFeePerGas: number
  maxFeePerGas: number
}

export type EIP1559GasPrice = BaseGasPrice<EIP1559GasPriceInfo> & {
  eip1559: true
}

export type GasPrice = BaseGasPrice<number> & {
  eip1559: false
}
