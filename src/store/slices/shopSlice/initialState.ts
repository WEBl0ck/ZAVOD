import { RESOURCES_TYPES } from '../resourcesSlice/initialState'
import { ITEMS_TYPES } from '../itemsSlice/initialState'

const shopState = {
  blueprints: {
    'PLASTIC PIPE MACHINE': {
      price: 5000,
      inputList: [
        {
          name: RESOURCES_TYPES.PLASTIC,
          amount: 5,
        },
        {
          name: RESOURCES_TYPES.WATER,
          amount: 20,
        },
      ],
      outputList: [
        {
          name: ITEMS_TYPES['PLASTIC PIPE'],
          amount: 1,
        },
      ],
    },
    'IRON GEAR MACHINE': {
      price: 15000,
      inputList: [
        {
          name: RESOURCES_TYPES.IRON,
          amount: 15,
        },
        {
          name: RESOURCES_TYPES.OIL,
          amount: 2,
        },
      ],
      outputList: [
        {
          name: ITEMS_TYPES['IRON GEAR'],
          amount: 10,
        },
      ],
    },
  },
  resources: {
    'MINE DRILL FOR GOLD': {
      price: 1000,
      resource: RESOURCES_TYPES.GOLD,
      amountPerTick: 5,
    },
    'MINE DRILL FOR SILVER': {
      price: 13000,
      resource: RESOURCES_TYPES.SILVER,
      amountPerTick: 5,
    },
  },
}

export default shopState
