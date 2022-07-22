import { Currency, Network, TimeFrame } from '../models'

export interface MiscPrices {
  network?: Network
}

export interface MiscTokenPrices {
  tokenAddress: string
  network?: Network
  timeFrame?: TimeFrame
  currency?: Currency
}

export interface MiscGasPrices {
  /**
   * Retrieve post London gas price details
   */
  eip1559: boolean
  network?: Network
}
