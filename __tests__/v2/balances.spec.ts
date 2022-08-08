import { V2Client, V2Models } from '../../src'
import { SSECallback } from '../../src/client'
import { config } from '../config'

const { Network } = V2Models

jest.setTimeout(60 * 1000)
describe('balances | Gets balances of different supported applications for a specific address.', () => {
  const mockClient = new V2Client(config)
  const client = new V2Client(config)
  let request = jest.fn()

  const resetMock = () => {
    request = jest.fn()
    mockClient.sendRequest = request
  }

  describe('Auth', () => {
    const parameters = {
      networks: [Network.ETHEREUM_MAINNET],
      addresses: ['0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'],
    }
    it('should throw error when no apiKey is provided', () => {
      const client = new V2Client({ apiKey: 'foo' })
      client.balances.get(parameters, err => {
        expect(err).toBeDefined()
      })
    })
    it('should not throw an error when an apiKey is provided', () => {
      client.balances.get(parameters, err => {
        expect(err).toBeNull()
      })
    })
  })

  describe('GET /v2/apps/{appId}/balance', () => {
    beforeEach(resetMock)

    it('should accept following parameters', () => {
      const parameters = {
        appId: 'aave-v2',
        addresses: ['0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'],
        network: Network.ETHEREUM_MAINNET,
      }
      mockClient.balances.getAppBalance(parameters)

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

      mockClient.balances.supported(parameters)
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
    const parameters = {
      networks: [Network.ETHEREUM_MAINNET],
      addresses: ['0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'],
    }

    it('should not use axios client', done => {
      mockClient.balances.get(parameters, (err, data) => {
        if (err) done(err)
        if (data?.type === 'full') done()
      })
      expect(request).toBeCalledTimes(0)
    })

    it('should use callback to accept response partially and fully', done => {
      const resp = [] as any[]
      const callback: SSECallback<any> = (err, data): void => {
        expect(err).toBeNull()
        if (err) {
          done(err)
          return
        }
        const { type, payload } = data || {}
        if (type === 'partial') {
          resp.push(payload)
        } else if (type === 'full') {
          expect(JSON.stringify(resp)).toEqual(JSON.stringify(payload))
          done()
        } else {
          done(new Error('Unknown SSE Callback Type'))
        }
      }

      client.balances.get(parameters, callback)
    })

    it('should use async/await function to accept fully response', async () => {
      const resp1 = await client.balances.get(parameters)
      let res: (value: unknown) => void
      const p = new Promise(resolve => {
        res = resolve
      })

      const callback: SSECallback<any> = (err, data): void => {
        expect(err).toBeNull()
        const { type, payload } = data || {}
        if (type === 'full') {
          res(payload)
        }
      }
      client.balances.get(parameters, callback)
      expect(resp1).toBeDefined()
      const resp2 = await p
      expect(resp2).toEqual(resp1)
    })
  })
})
