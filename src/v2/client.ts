import { BaseClient, Config } from '../client'
import { Apps, Balances, Exchange, Misc, NFT, Transactions, ZapIn, ZapOut } from './methods'

const DefaultV2ClientConfig: Partial<Config> = {
  apiHost: 'https://api.zapper.fi',
  baseRequestConfig: {
    headers: {
      Accept: 'application/json',
    },
  },
}

export class V2Client extends BaseClient {
  constructor(protected readonly config: Config) {
    super({
      ...DefaultV2ClientConfig,
      ...config,
    })
  }

  apps = new Apps(this)
  transactions = new Transactions(this)
  misc = new Misc(this)
  zapIn = new ZapIn(this)
  zapOut = new ZapOut(this)
  exchange = new Exchange(this)
  balances = new Balances(this, this.config)
  nft = new NFT(this)
}
