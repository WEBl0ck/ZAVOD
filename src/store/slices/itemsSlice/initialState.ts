import { getTypeFromState } from '../../../utils/utils'

const initialState = {
  list: {
    'GOLDEN COIN': {
      price: 1,
      RPS: 1,
    },
    'SILVER COIN': {
      price: 1,
      RPS: 1,
    },
    'PLASTIC PIPE': {
      price: 10,
      RPS: 1,
    },
    'IRON GEAR': {
      price: 100,
      RPS: 1,
    },
  },
}

export default initialState

export type Items = typeof initialState.list

export const ITEMS_TYPES = getTypeFromState(initialState.list)
