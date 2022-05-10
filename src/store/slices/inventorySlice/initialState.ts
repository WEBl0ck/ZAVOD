interface inventoryState {
  items: {
    [key: string]: {
      price: number
      amount: number
    }
  }
  resources: {
    [key: string]: {
      price: number
      amount: number
    }
  }
}

export const initialState: inventoryState = {
  items: {},
  resources: {},
}
