import { SSEClient } from '../../src/client/sseClient'
import { Network } from '../../src/v2/models'
import { config } from '../config'

jest.setTimeout(10 * 1000)
describe('sse client', () => {
  it('should received message', done => {
    const balanceSSE = new SSEClient({
      pathname: '/v2/balances',
      apiKey: config.apiKey,
      query: {
        addresses: ['0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852'],
        network: [Network.ETHEREUM_MAINNET],
      },
    })

    balanceSSE.onError = (evt: MessageEvent) => {
      console.error(evt)
      expect(evt).not.toBeDefined()
      done(evt)
    }

    balanceSSE.addEventListener('balance', (evt: MessageEvent) => {
      expect(evt.data).toBeDefined()
    })
    balanceSSE.addEventListener('end', () => {
      balanceSSE.close()
      done()
    })
    balanceSSE.create()
  })
})
