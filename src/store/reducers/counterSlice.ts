import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 1
}

const slice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1
        },
    },
});


export const { increment, decrement } = slice.actions;

export default slice.reducer;