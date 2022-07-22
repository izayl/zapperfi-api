import { Network } from '../models'

export interface BalancesGet {
  addresses: string[]
  networks?: Network[]
  bundled?: boolean
}

export interface BalancesAppBalance {
  appId: string
  addresses: string[]
  network?: Network
}

export interface BalancesSupported {
  addresses: string[]
}
