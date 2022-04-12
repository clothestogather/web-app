/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getShop = /* GraphQL */ `
  query GetShop($id: ID!) {
    getShop(id: $id) {
      id
      name
      description
      items {
        items {
          id
          name
          description
          imgs
          rating
          currency
          price
          color
          type
          createdAt
          updatedAt
          shopItemsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listShops = /* GraphQL */ `
  query ListShops(
    $filter: ModelShopFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShops(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        items {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
      id
      name
      description
      imgs
      shop {
        id
        name
        description
        items {
          nextToken
        }
        createdAt
        updatedAt
      }
      rating
      currency
      price
      color
      type
      createdAt
      updatedAt
      shopItemsId
    }
  }
`;
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        imgs
        shop {
          id
          name
          description
          createdAt
          updatedAt
        }
        rating
        currency
        price
        color
        type
        createdAt
        updatedAt
        shopItemsId
      }
      nextToken
    }
  }
`;
