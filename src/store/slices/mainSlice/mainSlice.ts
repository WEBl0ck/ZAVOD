import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'

import initialState from './initialState'

// This slice contain all our money
export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload
    },
    setCurrentCraftOption: (state, action) => {
      state.selectedItem = action.payload
    },
  },
})

export const selectCurrentCraftOption = (state: RootState) => state['main'].selectedItem

export const { increment, decrement, incrementByAmount, decrementByAmount, setCurrentCraftOption } = mainSlice.actions

export default mainSlice.reducer
