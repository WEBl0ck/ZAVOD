import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './initialState'

// This slice contain all our money
export const resourcesSlice = createSlice({
  name: 'resources',
  initialState,
  reducers: {},
})

export const {} = resourcesSlice.actions

export default resourcesSlice.reducer
