<p align='center'>
  <img width="400" src="https://user-images.githubusercontent.com/10740043/180376574-dc43ca33-8678-441e-a2c4-df305616e95a.png">
  <h3 align="center">Zapperfi API</h3>
  <p align="center">Unofficial wrapper for the Zapperfi API</p>
  <p align="center"><sub>Don't forget to leave a ⭐ if you found this useful.</sub></p>
</p>

![Test](https://github.com/izayl/zapperfi-api/workflows/TEST/badge.svg)
![npm](https://img.shields.io/npm/v/zapperfi-api)
![npm](https://img.shields.io/npm/dm/zapperfi-api)
![Lines](https://img.shields.io/badge/Coverage-96.88%25-brightgreen.svg)

## Install

```
# use npm
$ npm i zapperfi-api

# use yarn
$ yarn add zapperfi-api

# use pnpm
$ pnpm add zapperfi-api
```

## API

the [zapperfi v2 api](https://api.zapper.fi/api/static/index.html) have been wrapped.

- [x] [apps](src/v2/methods/apps.ts)
- [x] [balances](src/v2/methods/balances.ts)
- [x] [exchange](src/v2/methods/exchange.ts)
- [x] [misc](src/v2/methods/misc.ts)
- [x] [transactions](src/v2/method/transactions.ts)
- [x] [zapIn](src/v2/methods/zapIn.ts)
- [x] [zapOut](src/v2/methods/zapOut.ts)
- [x] [nft](src/v2/methods/nft.ts)

## Examples

### get addresses balances

```ts
import { V2Client, Network } from 'zapperfi-api'

const client = new V2Client({
  apiKey: process.env.ZAPPER_API_KEY
})

const parameters = {
  networks: [Network.ETHEREUM_MAINNET],
  addresses: ['0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'],
}

// use callback style
const callback = (err, data) => {
  if (err) throw err

  const { type, payload } = data

  if (type === 'partial') {
    // process payload with every incoming message payload
    // faster than full payload, but payload is not full
    ...
  }

  if (type === 'full') {
    // or, just process the final payload
    // slower than partial payload, but payload is full
    ...
  }
}
client.balances.get(parameters, callback)


// or, use async/await style
// but it only return the final full payload
const balances = await client.balances.get(parameters)
```

## Donations

Feel free to use the GitHub Sponsor button to donate towards my work if you think this project is helpful. 🤗
