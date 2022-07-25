import getAppBalance from '../../dist/resp/balances.getAppBalance.json'
import { TokenBalanceResponse } from '../../src/v2/models'

export const expectType = <T>(value: T) => {
  // Do nothing, the TypeScript compiler handles this for us
}

expectType<TokenBalanceResponse>(getAppBalance as TokenBalanceResponse)
