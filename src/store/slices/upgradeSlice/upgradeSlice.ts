import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'

import initialState from './initialState'

// This slice contain all our money
export const upgradeSlice = createSlice({
  name: 'upgrades',
  initialState,
  reducers: {},
})

export const selectUpgrades = (state: RootState) => state['upgrades'].list

export const {} = upgradeSlice.actions

export default upgradeSlice.reducer
