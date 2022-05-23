import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '../../store'

import initialState from './initialState'

// This slice contain all our money
export const resourcesSlice = createSlice({
  name: 'resources',
  initialState,
  reducers: {},
})

export const selectResources = (state: RootState) => state['resources'].list

export const {} = resourcesSlice.actions

export default resourcesSlice.reducer
