import { BaseClient } from '../client'
import { Apps, Balances, Exchange, Misc, NFT, Transactions, ZapIn, ZapOut } from './methods'

export class V2Client extends BaseClient {
  apps = new Apps(this)
  transactions = new Transactions(this)
  misc = new Misc(this)
  zapIn = new ZapIn(this)
  zapOut = new ZapOut(this)
  exchange = new Exchange(this)
  balances = new Balances(this)
  nft = new NFT(this)
}
