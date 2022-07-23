import { V2Client } from '../../src'
import { config } from '../config'

describe('/v2/nft | Get Ethereum NFT balances for addresses.', () => {
  const client = new V2Client(config)
  let request = jest.fn()

  const resetMock = () => {
    request = jest.fn()
    client.sendRequest = request
  }

  describe('GET /v2/nft/balances/net-worth', () => {
    beforeEach(resetMock)

    it('should accept following parameters', () => {
      const parameters = {
        addresses: ['0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'],
      }
      client.nft.getNetWorth(parameters)

      expect(request).toBeCalledTimes(1)
      expect(request.mock.calls[0]).toEqual([
        {
          method: 'GET',
          params: parameters,
          url: '/v2/nft/balances/net-worth',
        },
      ])
    })
  })

  describe('GET /v2/nft/balances/collections', () => {
    beforeEach(resetMock)

    it('should accept following parameters', () => {
      const parameters = {
        addresses: ['0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'],
      }

      client.nft.getCollections(parameters)

      expect(request).toBeCalledTimes(1)
      expect(request.mock.calls[0]).toEqual([
        {
          method: 'GET',
          params: parameters,
          url: '/v2/nft/balances/collections',
        },
      ])
    })
  })

  describe('GET /v2/nft/balances/collections-totals', () => {
    beforeEach(resetMock)

    it('should accept following url/parameters', () => {
      const parameters = {
        addresses: ['0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'],
      }
      client.nft.getCollectionsTotals(parameters)

      expect(request).toBeCalledTimes(1)
      expect(request.mock.calls[0]).toEqual([
        {
          method: 'GET',
          params: parameters,
          url: '/v2/nft/balances/collections-totals',
        },
      ])
    })
  })

  describe('GET /v2/nft/balances/tokens', () => {
    beforeEach(resetMock)

    it('should accept following url/parameters', () => {
      const parameters = {
        addresses: ['0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'],
      }
      client.nft.getTokens(parameters)

      expect(request).toBeCalledTimes(1)
      expect(request.mock.calls[0]).toEqual([
        {
          method: 'GET',
          params: parameters,
          url: '/v2/nft/balances/tokens',
        },
      ])
    })
  })

  describe('GET /v2/nft/balances/tokens-totals', () => {
    beforeEach(resetMock)

    it('should accept following url/parameters', () => {
      const parameters = {
        addresses: ['0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'],
      }
      client.nft.getTokensTotals(parameters)

      expect(request).toBeCalledTimes(1)
      expect(request.mock.calls[0]).toEqual([
        {
          method: 'GET',
          params: parameters,
          url: '/v2/nft/balances/tokens-totals',
        },
      ])
    })
  })
})
