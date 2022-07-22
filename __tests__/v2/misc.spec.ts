import { V2Client, V2Models } from '../../src'
import { config } from './config'

const { Network, Currency, TimeFrame } = V2Models

describe('misc | Miscellaneous Data Endpoints', () => {
  const client = new V2Client(config)
  let request = jest.fn()

  const resetMock = () => {
    request = jest.fn()
    client.sendRequest = request
  }

  describe('GET /v2/prices', () => {
    beforeEach(resetMock)

    it('should accept network', () => {
      const parameters = {
        network: Network.ETHEREUM_MAINNET,
      }
      client.misc.prices(parameters)

      expect(request).toBeCalledTimes(1)
      expect(request.mock.calls[0]).toEqual([
        {
          method: 'GET',
          params: parameters,
          url: '/v2/prices',
        },
      ])
    })
  })

  describe('GET /v2/prices/{tokenAddress}', () => {
    beforeEach(resetMock)

    it('should accept following parameters', () => {
      const parameters = {
        tokenAddress: '0x028171bca77440897b824ca71d1c56cac55b68a3',
        network: Network.ETHEREUM_MAINNET,
        timeFrame: TimeFrame.DAY,
        currency: Currency.USD,
      }
      const { tokenAddress, ...params } = parameters

      client.misc.getTokenPrices(parameters)
      expect(request).toBeCalledTimes(1)
      expect(request.mock.calls[0]).toEqual([
        {
          method: 'GET',
          params,
          url: `/v2/prices/${tokenAddress}`,
        },
      ])
    })
  })

  describe('GET /v2/gas-prices', () => {
    beforeEach(resetMock)

    it('should accept following parameters', () => {
      const parameters = {
        network: Network.ETHEREUM_MAINNET,
        eip1559: true,
      }

      client.misc.getGasPrices(parameters)
      expect(request).toBeCalledTimes(1)
      expect(request.mock.calls[0]).toEqual([
        {
          method: 'GET',
          params: parameters,
          url: '/v2/gas-prices',
        },
      ])
    })
  })
})
