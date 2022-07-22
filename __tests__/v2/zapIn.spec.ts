import { V2Client, V2Models } from '../../src'
import { config } from './config'

const { ZapType } = V2Models

describe('/v2/zap-in | Endpoints for creating transactions for adding liquidity to different applications.', () => {
  const client = new V2Client(config)
  let request = jest.fn()

  const resetMock = () => {
    request = jest.fn()
    client.sendRequest = request
  }

  describe('GET /v2/zap-in/{type}/supported', () => {
    beforeEach(resetMock)

    it('should accept zap type', () => {
      const parameters = {
        type: ZapType.BASE,
      }
      client.zapIn.supported(parameters)

      expect(request).toBeCalledTimes(1)
      expect(request.mock.calls[0]).toEqual([
        {
          method: 'GET',
          params: undefined,
          url: `/v2/zap-in/${parameters.type}/supported`,
        },
      ])
    })
  })

  describe('GET /v2/zap-in/{type}/{appId}/approval-state', () => {
    beforeEach(resetMock)

    it('should accept following parameters', () => {
      const parameters = {
        type: ZapType.BASE,
        appId: 'aave-v2',
        ownerAddress: 'vitalik.eth',
        sellTokenAddress: '0x028171bca77440897b824ca71d1c56cac55b68a3',
        amount: 1 * 10 ** 18,
      }
      client.zapIn.getApprovalState(parameters)

      const { type, appId, ...params } = parameters

      expect(request).toBeCalledTimes(1)
      expect(request.mock.calls[0]).toEqual([
        {
          method: 'GET',
          params,
          url: `/v2/zap-in/${type}/${appId}/approval-state`,
        },
      ])
    })
  })
  describe('GET /v2/zap-in/{type}/{appId}/approval-transaction', () => {
    beforeEach(resetMock)

    it('should accept following parameters', () => {
      const parameters = {
        type: ZapType.BASE,
        appId: 'aave-v2',
        ownerAddress: 'vitalik.eth',
        sellTokenAddress: '0x028171bca77440897b824ca71d1c56cac55b68a3',
        amount: 1 * 10 ** 18,
      }
      client.zapIn.getApprovalTransaction(parameters)

      const { type, appId, ...params } = parameters

      expect(request).toBeCalledTimes(1)
      expect(request.mock.calls[0]).toEqual([
        {
          method: 'GET',
          params,
          url: `/v2/zap-in/${type}/${appId}/approval-transaction`,
        },
      ])
    })
  })
  describe('GET /v2/zap-in/{type}/{appId}/transaction', () => {
    beforeEach(resetMock)

    it('should accept following parameters', () => {
      const parameters = {
        type: ZapType.BASE,
        appId: 'aave-v2',
        ownerAddress: 'vitalik.eth',
        sellAmount: 1 * 10 ** 18,
        sellTokenAddress: '0x028171bca77440897b824ca71d1c56cac55b68a3',
        poolAddress: '0x028171bca77440897b824ca71d1c56cac55b68a3',
        payoutTokenAddress: '0x028171bca77440897b824ca71d1c56cac55b68a3',
        slippagePercentage: 2,
        partnerId: 'Yearn',
      }
      client.zapIn.getTransaction(parameters)

      const { type, appId, ...params } = parameters

      expect(request).toBeCalledTimes(1)
      expect(request.mock.calls[0]).toEqual([
        {
          method: 'GET',
          params,
          url: `/v2/zap-in/${type}/${appId}/transaction`,
        },
      ])
    })
  })
})
