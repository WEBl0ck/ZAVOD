import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const selectValue = (state: RootState) => state['test'].value;

export const { increment, decrement, incrementByAmount } = testSlice.actions;

export default testSlice.reducer;