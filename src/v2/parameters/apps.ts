import { Network } from '../models'

export interface AppPositions {
  /**
   * ID of the application for which to retrieve contract positions.
   */
  appId: string

  /**
   * Retrieve positions for this network
   */
  network: Network

  /**
   * Retrieve specific position group within the app
   */
  groupId: string
}

export interface AppTokens {
  /**
   * ID of the application for which to retrieve contract positions.
   */
  appId: string

  /**
   * Retrieve positions for this network
   */
  network: Network

  /**
   * Retrieve specific position group within the app
   */
  groupId: string
}

export interface AppGet {
  /**
   * ID of the application for which to retrieve contract positions.
   */
  appId: string
}
