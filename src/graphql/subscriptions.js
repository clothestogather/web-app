/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateShop = /* GraphQL */ `
  subscription OnCreateShop {
    onCreateShop {
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
export const onUpdateShop = /* GraphQL */ `
  subscription OnUpdateShop {
    onUpdateShop {
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
export const onDeleteShop = /* GraphQL */ `
  subscription OnDeleteShop {
    onDeleteShop {
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
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem {
    onCreateItem {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem {
    onUpdateItem {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem {
    onDeleteItem {
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
