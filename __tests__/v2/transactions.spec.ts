import { V2Client } from '../../src'
import { Network } from '../../src/v2/models'
import { config } from '../config'

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
        address: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
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
        addresses: ['0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'],
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
