import { V2Client } from '../../src'
import { Network } from '../../src/v2/models'
import { config } from './config'

describe('/v2/exchange | Returns an easy to submit transaction for exchanging assets.', () => {
  const client = new V2Client(config)
  let request = jest.fn()

  const resetMock = () => {
    request = jest.fn()
    client.sendRequest = request
  }

  describe('GET /v2/exchange/price', () => {
    beforeEach(resetMock)

    it('should accept following parameters', () => {
      const parameters = {
        sellTokenAddress: '0x028171bca77440897b824ca71d1c56cac55b68a3',
        buyTokenAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        sellAmount: 1 * 10 ** 18,
        network: Network.ETHEREUM_MAINNET,
      }
      client.exchange.getPrice(parameters)

      expect(request).toBeCalledTimes(1)
      expect(request.mock.calls[0]).toEqual([
        {
          method: 'GET',
          params: parameters,
          url: '/v2/exchange/price',
        },
      ])
    })
  })
  describe('GET /v2/exchange/quote', () => {
    beforeEach(resetMock)

    it('should accept following parameters', () => {
      const parameters = {
        sellTokenAddress: '0x028171bca77440897b824ca71d1c56cac55b68a3',
        buyTokenAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        sellAmount: 1 * 10 ** 18,
        network: Network.ETHEREUM_MAINNET,
      }
      client.exchange.getQuote(parameters)

      expect(request).toBeCalledTimes(1)
      expect(request.mock.calls[0]).toEqual([
        {
          method: 'GET',
          params: parameters,
          url: '/v2/exchange/quote',
        },
      ])
    })
  })
  describe('GET /v2/exchange/supported', () => {
    beforeEach(resetMock)

    it('should not accept parameters', () => {
      client.exchange.supported()

      expect(request).toBeCalledTimes(1)
      expect(request.mock.calls[0]).toEqual([
        {
          method: 'GET',
          params: undefined,
          url: '/v2/exchange/supported',
        },
      ])
    })
  })
})
