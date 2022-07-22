import { V2Client } from '../../src'
import { Network } from '../../src/v2/models'
import { config } from './config'

describe('/v2/transactions | Historical Transactions.', () => {
  const client = new V2Client(config)
  let request = jest.fn()

  const resetMock = () => {
    request = jest.fn()
    client.sendRequest = request
  }

  describe('GET /v2/transactions', () => {
    beforeEach(resetMock)

    it('should accept address', () => {
      const parameters = {
        address: 'vitalik.eth',
        network: Network.ETHEREUM_MAINNET,
      }
      client.transactions.get(parameters)

      expect(request).toBeCalledTimes(1)
      expect(request.mock.calls[0]).toEqual([
        {
          method: 'GET',
          params: parameters,
          url: '/v2/transactions',
        },
      ])
    })

    it('should accept addresses', () => {
      const parameters = {
        addresses: ['vitalik.eth'],
        network: Network.ETHEREUM_MAINNET,
      }
      client.transactions.get(parameters)

      expect(request).toBeCalledTimes(1)
      expect(request.mock.calls[0]).toEqual([
        {
          method: 'GET',
          params: parameters,
          url: '/v2/transactions',
        },
      ])
    })
  })
})
