import { Address, PresentedBalancePayload, TokenBalanceResponse, TokenSupportByNetwork } from '../models'

export type BalancesGetResp = PresentedBalancePayload[]
export type BalancesAppBalanceResp = { balances: Record<Address, TokenBalanceResponse> }
export type BalancesSupportedResp = TokenSupportByNetwork[]
