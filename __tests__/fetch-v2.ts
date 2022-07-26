import 'dotenv/config'
import path from 'path'
import fs from 'fs'
import { V2Client } from '../src'
import { Currency, Network, TimeFrame } from '../src/v2/models'
import { config } from './config'

const client = new V2Client(config)
const tempPath = path.resolve(__dirname, '../.cache')

if (!fs.existsSync(tempPath)) {
  fs.mkdirSync(tempPath, { recursive: true })
}

const writeJson = (name: string, resp: string) => {
  fs.writeFileSync(path.resolve(tempPath, `${name}.json`), resp)
}

const writeJsonCallback = (name: string) => (err, data) => {
  if (err) {
    throw err
  } else {
    writeJson(name, JSON.stringify(data))
  }
}

client.balances.get({
  addresses: ['0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'],
  networks: [Network.ETHEREUM_MAINNET],
}, (err, data) => {
  if (err) {
    throw err
  }
  if (data?.type === 'full') {
    writeJson('balances.get', JSON.stringify(data.payload))
  }
})

client.balances.getAppBalance({
  network: Network.ETHEREUM_MAINNET,
  addresses: ['0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'],
  appId: 'aave-v2',
}, writeJsonCallback('balances.getAppBalance'))

client.balances.supported({
  addresses: ['0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'],
}, writeJsonCallback('balances.supported'))

client.transactions.get({
  network: Network.ETHEREUM_MAINNET,
  address: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
}, writeJsonCallback('transactions.get'))

client.misc.prices({
  network: Network.ETHEREUM_MAINNET,
}, writeJsonCallback('misc.prices'))
client.misc.getTokenPrices({
  tokenAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
  network: Network.ETHEREUM_MAINNET,
  timeFrame: TimeFrame.DAY,
  currency: Currency.USD,
}, writeJsonCallback('misc.getTokenPrices'))
client.misc.getGasPrices({
  network: Network.ETHEREUM_MAINNET,
  eip1559: true,
}, writeJsonCallback('misc.getGasPrices'))
