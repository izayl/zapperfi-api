import { V2Client } from '../../src'
import { Network } from '../../src/v2/models'
import { config } from '../config'

describe('/v2/apps | Get supported applications.', () => {
  const client = new V2Client(config)
  let request = jest.fn()

  const resetMock = () => {
    request = jest.fn()
    client.sendRequest = request
  }

  describe('GET /v2/apps', () => {
    beforeEach(resetMock)

    it('should not accept parameters', () => {
      client.apps.supported()

      expect(request).toBeCalledTimes(1)
      expect(request.mock.calls[0]).toEqual([
        {
          method: 'GET',
          url: '/v2/apps',
        },
      ])
    })
  })

  describe('GET /v2/apps/{appId}', () => {
    beforeEach(resetMock)

    it('should accept following parameters', () => {
      const parameters = {
        appId: 'aave-v2',
      }

      client.apps.get(parameters)

      expect(request).toBeCalledTimes(1)
      expect(request.mock.calls[0]).toEqual([
        {
          method: 'GET',
          params: undefined,
          url: `/v2/apps/${parameters.appId}`,
        },
      ])
    })
  })

  describe('GET /v2/apps/{appId}/positions', () => {
    beforeEach(resetMock)

    it('should accept following url/parameters', () => {
      const parameters = {
        appId: 'aave-v2',
        network: Network.ETHEREUM_MAINNET,
        groupId: 'supply',
      }
      client.apps.getPositions(parameters)

      expect(request).toBeCalledTimes(1)
      expect(request.mock.calls[0]).toEqual([
        {
          method: 'GET',
          params: {
            network: parameters.network,
            groupId: parameters.groupId,
          },
          url: `/v2/apps/${parameters.appId}/positions`,
        },
      ])
    })
  })

  describe('GET /v2/apps/{appId}/tokens', () => {
    beforeEach(resetMock)

    it('should accept following url/parameters', () => {
      const parameters = {
        appId: 'aave-v2',
        network: Network.ETHEREUM_MAINNET,
        groupId: 'supply',
      }
      client.apps.getTokens(parameters)

      expect(request).toBeCalledTimes(1)
      expect(request.mock.calls[0]).toEqual([
        {
          method: 'GET',
          params: {
            network: parameters.network,
            groupId: parameters.groupId,
          },
          url: `/v2/apps/${parameters.appId}/tokens`,
        },
      ])
    })
  })
})
