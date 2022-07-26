import { EIP1559GasPrice, GasPrice, TokenFramePrices, TokenPrice } from '../models'

export type MiscPricesResp = TokenPrice[]

export type MiscTokenPricesResp = TokenFramePrices

export type MiscGasPricesResp = GasPrice | EIP1559GasPrice
