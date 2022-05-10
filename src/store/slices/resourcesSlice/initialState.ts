// RPS means Resource Per Second
interface resourcesState {
  resources: {
    [key: string]: {
      price: number
      RPS: number
    }
  }
}

export const initialState: resourcesState = {
  resources: {
    WOOD: {
      price: 100,
      RPS: 0,
    },
    PLASTIC: {
      price: 100,
      RPS: 0,
    },
    COPPER: {
      price: 100,
      RPS: 0,
    },
    WATER: {
      price: 100,
      RPS: 0,
    },
    COAL: {
      price: 100,
      RPS: 0,
    },
    TIN: {
      price: 100,
      RPS: 0,
    },
    STONE: {
      price: 100,
      RPS: 0,
    },
    IRON: {
      price: 100,
      RPS: 0,
    },
    NAPHTHA: {
      price: 100,
      RPS: 0,
    },
    SAND: {
      price: 100,
      RPS: 0,
    },
    GLASS: {
      price: 100,
      RPS: 0,
    },
    LEAD: {
      price: 100,
      RPS: 0,
    },
    OIL: {
      price: 100,
      RPS: 0,
    },
    SULPHUR: {
      price: 100,
      RPS: 0,
    },
    SILVER: {
      price: 100,
      RPS: 0,
    },
    GOLD: {
      price: 100,
      RPS: 0,
    },
    PLATINUM: {
      price: 100,
      RPS: 0,
    },
    URAN: {
      price: 100,
      RPS: 0,
    },
  },
}
