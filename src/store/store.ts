import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import mainReducer from './slices/mainSlice/mainSlice'
import inventorySlice from './slices/inventorySlice/inventorySlice'
import itemsSlice from './slices/itemsSlice/itemsSlice'
import resourcesSlice from './slices/resourcesSlice/resourcesSlice'
import shopSlice from './slices/shopSlice/shopSlice'
import upgradeSlice from './slices/upgradeSlice/upgradeSlice'

export const store = configureStore({
  reducer: {
    main: mainReducer,
    inventory: inventorySlice,
    items: itemsSlice,
    resources: resourcesSlice,
    shop: shopSlice,
    upgrades: upgradeSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
