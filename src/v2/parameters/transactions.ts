import { Network } from '../models'

export type Transactions = {
  network?: Network
} & ({
  addresses: string[]
  address?: never
} | {
  addresses?: never
  address: string
})
