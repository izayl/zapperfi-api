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

before using the zapperfi-api, [you need to request a zapperfi api_key first](https://zapperfi.zendesk.com/hc/en-us/requests/new?ticket_form_id=7469559919121)

the [zapperfi v2 api](https://api.zapper.fi/api/static/index.html) have been wrapped.

- [x] [apps](#apps)
- [x] [balances](#balances)
- [x] [exchange](#exchange)
- [x] [misc](#misc)
- [x] [transactions](#transactions)
- [x] [zapIn](#zapin)
- [x] [zapOut](#zapout)
- [x] [nft](#nft)

## Usage

### Creating a client

To create a client, simply provide an object with your `apiKey`

NOTE: If you're using `zapperfi-api` in a browser, you'll need to proxy your requests through your server with credentials, to keep the `apiKey` confidential. I will provide a convenient way to do this soon.

```ts
import { V2Client } from 'zapperfi-api'

const client = new V2Client({
  apiKey: '<your-api-key>',
})
```

### Make a request

All methods have 2 arguments: the first one includes all of the parameters for particular method. And the second one is a callback function, it's optional, if you don't provide it, the request will return a promise instead. All the parameters and responses types are already defined, so you can use them directly with safe type.

```ts
// callback style
client.misc.getGasPrices(parameters, callback)

// async/await style
const response = await client.misc.getGasPrices(parameters)
```

## Examples

### get wallet tokens breakdown

```ts
import { V2Client, V2Models } from 'zapperfi-api'

const client = new V2Client({
  apiKey: process.env.ZAPPER_API_KEY,
})

const parameters = {
  networks: [V2Models.Network.ETHEREUM_MAINNET],
  addresses: ['0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'],
}

await client.balances.getAppBalance({ addresses, network, appId: 'tokens' })
```

### get addresses balances

```ts
import { V2Client, V2Models } from 'zapperfi-api'

const client = new V2Client({
  apiKey: process.env.ZAPPER_API_KEY
})

const parameters = {
  networks: [V2Models.Network.ETHEREUM_MAINNET],
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

## Client Methods

- [apps](#apps)
- [balances](#balances)
- [exchange](#exchange)
- [misc](#misc)
- [transactions](#transactions)
- [zapIn](#zapin)
- [zapOut](#zapout)
- [nft](#nft)

### apps

---

Get supported applications.

#### apps.getPositions(parameters, callback?)

Retrieve positions (non-tokenized) for a given application

#### apps.getTokens(parameters, callback?)

Retrieve tokens for a given application

#### apps.supported(callback?)

Retrieve all supported applications info

#### apps.get(parameters, callback?)

Retrieve application info by appId

### balances

---

#### balances.get(parameters, callback?)

Gets the balances for given addresses.

#### balances.getAppBalance(parameters, callback?)

get wallets balance by appId

#### balances.supported(parameters, callback?)

get all the apps info have participated for given addresses

### exchange

---

Returns an easy to submit transaction for exchanging assets.

#### exchange.getPrice(parameters, callback?)

Returns data about the amount received if a trade would be made. Should be called whenever a price needs to be calculated.

#### exchange.getQuote(parameters, callback?)

Returns both the relative price for a trade as well as the call data used to submit a transaction for a trade.Should only be called when a trade is ready to be submitted.

#### exchange.supported(callback?)

Returns the exchanges supported by Zapper API.

### misc

---

Miscellaneous Data Endpoints

#### misc.prices(parameters, callback?)

Retrieve supported tokens and their prices

#### misc.getTokenPrices(parameters, callback?)

Retrieve given token and its prices

#### misc.getGasPrices(parameters, callback?)

Retrieve a gas price aggregated from multiple different sources

### transactions

---

Historical Transactions. Data on past transactions for a specific address.

#### transactions.get(parameters, callback?)

Data on past transactions for addresses

### zapIn

---

Endpoints for creating transactions for adding liquidity to different applications.

#### zapIn.supported(parameters, callback?)

Provides a list of networks to app IDs that are supported by the Zap In routes.

#### zapIn.getApprovalState(parameters, callback?)

Retrieves an ERC20 approval status for an application zap-in

#### zapIn.getApprovalTransaction(parameters, callback?)

Builds an ERC20 approval transaction for an application zap-in

### zapOut

---

Endpoints for creating transactions for removing liquidity from an application.

#### zapOut.supported(parameters, callback?)

Provides a list of networks to app IDs that are supported by the Zap Out routes.

#### zapOut.getApprovalState(parameters, callback?)

Retrieves an ERC20 approval status for an application zap-out.

#### zapOut.getApprovalTransaction(parameters, callback?)

Builds an ERC20 approval transaction for an application zap-out.

### nft

---

Get Ethereum NFT balances for addresses.

#### nft.getNetWorth(parameters, callback?)

#### nft.getCollections(parameters, callback?)

#### nft.getCollectionsTotals(parameters, callback?)



## Donations

Feel free to use the GitHub Sponsor button to donate towards my work if you think this project is helpful. 🤗
