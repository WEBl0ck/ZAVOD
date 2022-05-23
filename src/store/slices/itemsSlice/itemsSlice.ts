import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '../../store'

import initialState from './initialState'

// This slice contain all our money
export const resourcesSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
})

export const selectItems = (state: RootState) => state['items'].list

export const {} = resourcesSlice.actions

export default resourcesSlice.reducer
