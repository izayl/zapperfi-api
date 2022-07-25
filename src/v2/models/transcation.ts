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
  nonce: number
  gasPrice: 9.3312870172e-8
  'gasLimit': 0.016053732810131224
  'input': '0x2e95b6c8'
  'gas': 0.010942613659330096
  'txSuccessful': true
  'account': '0xfd2afed55f7cf1fe491a585498657efe6a31227e'
  'fromEns': null
  'accountEns': null
}
