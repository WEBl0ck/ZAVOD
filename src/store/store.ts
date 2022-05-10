import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice/counterSlice'
import inventorySlice from './slices/inventorySlice/inventorySlice'
import itemsSlice from './slices/itemsSlice/itemsSlice'
import resourcesSlice from './slices/resourcesSlice/resourcesSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    inventory: inventorySlice,
    items: itemsSlice,
    resources: resourcesSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
