import { getTypeFromState } from '../../../utils/utils'

const initialState = {
  list: {
    WOOD: {
      name: 'WOOD',
      price: 100,
      RPS: 0,
    },
    PLASTIC: {
      name: 'PLASTIC',
      price: 100,
      RPS: 0,
    },
    COPPER: {
      name: 'COPPER',
      price: 100,
      RPS: 0,
    },
    WATER: {
      name: 'WATER',
      price: 100,
      RPS: 0,
    },
    COAL: {
      name: 'COAL',
      price: 100,
      RPS: 0,
    },
    TIN: {
      name: 'TIN',
      price: 100,
      RPS: 0,
    },
    STONE: {
      name: 'STONE',
      price: 100,
      RPS: 0,
    },
    IRON: {
      name: 'IRON',
      price: 100,
      RPS: 0,
    },
    NAPHTHA: {
      name: 'NAPHTHA',
      price: 100,
      RPS: 0,
    },
    SAND: {
      name: 'SAND',
      price: 100,
      RPS: 0,
    },
    GLASS: {
      name: 'GLASS',
      price: 100,
      RPS: 0,
    },
    LEAD: {
      name: 'LEAD',
      price: 100,
      RPS: 0,
    },
    OIL: {
      name: 'OIL',
      price: 100,
      RPS: 0,
    },
    SULPHUR: {
      name: 'SULPHUR',
      price: 100,
      RPS: 0,
    },
    SILVER: {
      name: 'SILVER',
      price: 100,
      RPS: 0,
    },
    GOLD: {
      name: 'GOLD',
      price: 100,
      RPS: 0,
    },
    PLATINUM: {
      name: 'PLATINUM',
      price: 100,
      RPS: 0,
    },
    URAN: {
      name: 'URAN',
      price: 100,
      RPS: 0,
    },
    ENERGY: {
      name: 'ENERGY',
      price: 100,
      RPS: 0,
    },
  },
}

export type Resources = typeof initialState.list

export const RESOURCES_TYPES = getTypeFromState(initialState.list)

export default initialState
