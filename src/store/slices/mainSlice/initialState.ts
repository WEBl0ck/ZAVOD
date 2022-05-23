// RPS means Resource Per Second
import itemsState, { ITEMS_TYPES } from '../itemsSlice/initialState'

import { ResourcesAndItems } from '../../../utils/utils'

interface mainState {
  value: number
  selectedItem: ResourcesAndItems
  storage: any
}

const initialState: mainState = {
  value: 0,
  selectedItem: {
    [ITEMS_TYPES['GOLDEN COIN']]: itemsState.list[ITEMS_TYPES['GOLDEN COIN']],
  },
  storage: {
    items: {
      count: 0,
      list: {},
    },
    resources: {
      count: 0,
      list: {},
    },
    upgrades: {
      count: 0,
      list: {},
    },
  },
}

export default initialState
