import { Address } from './address'
import { Network } from './network'

export interface Transaction {
  network: Network
  hash: string
  blockNumber: number
  name: 'Exchange' | 'Send' | 'Receive' | string
  direction: 'exchange' | 'outgoing' | 'incoming' | string
  timeStamp: string
  symbol: string
  address: Address
  amount: string
  from: Address
  destination: Address
  contract: Address
  subTransactions: Array<{
    type: 'outgoing' | 'incoming' | string
    symbol: string
    amount: number | string
    address: Address
  }>
  nonce: string
  gasPrice: number
  gasLimit: number
  input: string
  gas: number
  txSuccessful: boolean
  account: Address
  fromEns: string | null
  accountEns: string | null
}
