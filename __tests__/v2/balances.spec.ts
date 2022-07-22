import { V2Client, V2Models } from '../../src'
import { config } from './config'

const { Network, Currency, TimeFrame } = V2Models

describe('balances | Gets balances of different supported applications for a specific address.', () => {
  const client = new V2Client(config)
  let request = jest.fn()

  const resetMock = () => {
    request = jest.fn()
    client.sendRequest = request
  }

  describe('GET /v2/apps/{appId}/balance', () => {
    beforeEach(resetMock)

    it('should accept following parameters', () => {
      const parameters = {
        appId: 'aave-v2',
        addresses: ['vitalik.eth'],
        network: Network.ETHEREUM_MAINNET,
      }
      client.balances.getAppBalance(parameters)

      const { appId, ...params } = parameters

      expect(request).toBeCalledTimes(1)
      expect(request.mock.calls[0]).toEqual([
        {
          method: 'GET',
          params,
          url: `/v2/apps/${appId}/balances`,
        },
      ])
    })
  })

  describe('GET /v2/apps/balances/supported', () => {
    beforeEach(resetMock)

    it('should accept following parameters', () => {
      const parameters = {
        addresses: ['0x028171bca77440897b824ca71d1c56cac55b68a3'],
      }

      client.balances.supported(parameters)
      expect(request).toBeCalledTimes(1)
      expect(request.mock.calls[0]).toEqual([
        {
          method: 'GET',
          params: parameters,
          url: '/v2/apps/balances/supported',
        },
      ])
    })
  })

  describe('GET /v2/balances', () => {
    beforeEach(resetMock)

    it('should accept following parameters', () => {
      const parameters = {
        network: [Network.ETHEREUM_MAINNET, Network.ARBITRUM_MAINNET],
        addresses: ['vitalik.eth'],
      }

      client.balances.get(parameters)
      expect(request).toBeCalledTimes(1)
      expect(request.mock.calls[0]).toEqual([
        {
          method: 'GET',
          params: parameters,
          url: '/v2/balances',
        },
      ])
    })
  })
})
