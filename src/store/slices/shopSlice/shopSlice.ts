import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'

import initialState from './initialState'

// This slice contain all our money
export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {},
})

export const selectBlueprints = (state: RootState) => state['shop'].blueprints
export const selectResources = (state: RootState) => state['shop'].resources

export const {} = shopSlice.actions

export default shopSlice.reducer
