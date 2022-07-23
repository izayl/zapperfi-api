export interface NFTNetWorth {
  /**
   * User addresses
   */
  addresses: string[]
}

export interface NFTCollections {
  /**
   * User addresses
   */
  addresses: string[]

  /**
   * Returns only collections with an estimated value above
   */
  minCollectionValueUsd?: number

  /**
   * Returns only collections with name starting with
   */
  search?: string

  /**
   * Returns only collections provided
   */
  collectionAddresses?: string[]

  /**
   * Maximum items to return. Limited to 25.
   *
   * @default 25
   */
  limit?: number

  /**
   * Cursor used to paginate the results
   */
  cursor?: number
}

export interface NFTCollectionsTotals {
  /**
   * User addresses
   */
  addresses: string[]

  /**
   * Returns only collections with an estimated value above
   */
  minCollectionValueUsd?: number
  /**
   * Returns only collections with name starting with
   */
  search?: string
  /**
   * Returns only collections provided
   */
  collectionAddresses?: string[]
}

export interface NFTTokens {
  /**
   * User addresses
   */
  addresses: string[]

  /**
   * Returns only tokens with an estimated value above
   */
  minEstimatedValueUsd?: number

  /**
   * Returns only collections with name starting with
   */
  search?: string

  /**
   * Returns only collections provided
   */
  collectionAddresses?: string[]

  /**
   * Maximum items to return. Limited to 25.
   *
   * @default 25
   */
  limit?: number

  /**
   * Cursor used to paginate the results
   */
  cursor?: number
}

export interface NFTTokensTotals {
  /**
   * User addresses
   */
  addresses: string[]

  /**
   * Returns only tokens with an estimated value above
   */
  minEstimatedValueUsd?: number
  /**
   * Returns only collections with name starting with
   */
  search?: string

  /**
   * Returns only collections provided
   */
  collectionAddresses?: string[]
}
