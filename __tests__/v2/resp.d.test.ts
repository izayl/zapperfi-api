import getBalance from '../../dist/resp/balances.get.json'
import getAppBalance from '../../dist/resp/balances.getAppBalance.json'
import balancesSupported from '../../dist/resp/balances.supported.json'
import transactions from '../../dist/resp/transactions.get.json'
import miscPrices from '../../dist/resp/misc.prices.json'
import miscTokenPrices from '../../dist/resp/misc.getTokenPrices.json'
import miscGasPrices from '../../dist/resp/misc.getGasPrices.json'
import * as Responses from '../../src/v2/responses'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const expectType = <T>(value: T) => {
  // Do nothing, the TypeScript compiler handles this for us
}

expectType<Responses.BalancesGetResp>(getBalance as Responses.BalancesGetResp)
expectType<Responses.BalancesAppBalanceResp>(getAppBalance as Responses.BalancesAppBalanceResp)
expectType<Responses.BalancesSupportedResp>(balancesSupported as Responses.BalancesSupportedResp)

expectType<Responses.TransactionResp>(transactions as Responses.TransactionResp)

expectType<Responses.MiscPricesResp>(miscPrices as Responses.MiscPricesResp)
expectType<Responses.MiscTokenPricesResp>(miscTokenPrices as Responses.MiscTokenPricesResp)
expectType<Responses.MiscGasPricesResp>(miscGasPrices as Responses.MiscGasPricesResp)
