/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createShop = /* GraphQL */ `
  mutation CreateShop(
    $input: CreateShopInput!
    $condition: ModelShopConditionInput
  ) {
    createShop(input: $input, condition: $condition) {
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
export const updateShop = /* GraphQL */ `
  mutation UpdateShop(
    $input: UpdateShopInput!
    $condition: ModelShopConditionInput
  ) {
    updateShop(input: $input, condition: $condition) {
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
export const deleteShop = /* GraphQL */ `
  mutation DeleteShop(
    $input: DeleteShopInput!
    $condition: ModelShopConditionInput
  ) {
    deleteShop(input: $input, condition: $condition) {
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
export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
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
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
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
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
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
