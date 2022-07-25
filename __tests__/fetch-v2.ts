import 'dotenv/config'
import path from 'path'
import fs from 'fs'
import { V2Client } from '../src'
import { Network } from '../src/v2/models'
import { config } from './config'

const client = new V2Client(config)
const tempPath = path.resolve(__dirname, '../dist/resp')

if (!fs.existsSync(tempPath)) {
  fs.mkdirSync(tempPath)
}

const writeJson = (name: string, resp: string) => {
  fs.writeFileSync(path.resolve(tempPath, `${name}.json`), resp)
}

const parameters = {
  network: Network.ETHEREUM_MAINNET,
  addresses: ['0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'],
  appId: 'aave-v2',
}

client.balances.getAppBalance(parameters, (err, data) => {
  if (!err && data) {
    writeJson('balances.getAppBalance', JSON.stringify(data))
  }
})
