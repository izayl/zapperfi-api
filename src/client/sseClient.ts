/* eslint-disable @typescript-eslint/no-unused-vars */
import EventSource from 'eventsource'
import { stringifyUrl } from 'query-string'
import { SSEConfig } from './config'

type EventSourceInitDict = EventSource.EventSourceInitDict

export class SSEClient {
  private eventSource: EventSource | undefined
  private disconnected = false
  private config = {} as SSEConfig
  private eventListeners: Record<string, (evt: MessageEvent) => void> = {}

  constructor(config?: SSEConfig) {
    if (typeof config !== 'undefined') {
      this.config = config
    }
  }

  public setup = (config: Partial<SSEConfig>) => {
    this.config = {
      ...this.config,
      ...config,
    }
  }

  private prepareClient = () => {
    const {
      query = {},
      pathname = '',
      apiKey,
      apiHost = 'https://api.zapper.fi',
      ...dict
    } = this.config

    const url = stringifyUrl({
      url: apiHost + pathname,
      query,
    },
    { arrayFormat: 'bracket' },
    )

    const initDict = this.generateEventSourceDict(apiKey, dict)
    return { url, initDict }
  }

  protected generateEventSourceDict = (apiKey: string, dict: EventSourceInitDict) => {
    const {
      withCredentials = true,
      headers = {},
      proxy,
      rejectUnauthorized,
    } = dict
    return {
      withCredentials,
      headers: {
        'Content-Type': 'text/event-stream',
        'User-Agent': 'Mozilla/5.0',
        Authorization: `Basic ${Buffer.from(`${apiKey}: `).toString('base64')}`,
        ...headers,
      },
      proxy,
      rejectUnauthorized,
    }
  }

  public create = () => {
    const { url, initDict } = this.prepareClient()
    this.eventSource = new EventSource(url, initDict)

    this.eventSource.onopen = () => {
      this.disconnected = false
    }

    this.eventSource.onerror = (evt: MessageEvent) => {
      if (typeof this.onError === 'function') {
        this.onError(evt)
      }
    }

    this.eventSource.onmessage = (evt: MessageEvent) => {
      if (typeof this.onMessage === 'function') {
        this.onMessage(evt)
      }
    }

    Object.entries(this.eventListeners).forEach(([type, listener]) => {
      this.eventSource?.addEventListener(type, listener)
    })
  }

  onError = (evt: MessageEvent) => {
    // implemented by caller
  }

  onMessage = (evt: MessageEvent) => {
    // implemented by caller
  }

  addEventListener = <T = any>(
    type: string,
    listener: (evt: MessageEvent<T>) => void,
  ) => {
    this.eventListeners[type] = listener
  }

  close() {
    if (!this.disconnected) {
      this.eventSource?.close()
      this.disconnected = true
    }
  }
}
