import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 0,
}
const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers:{
        incrementar :(state, action = 1)=>{
            state.value = state.value + action.payload

        },
        decrementar : (state, action = 1)=>{
            state.value = state.value - action.payload
        },
        reseterar: (state)=>{
            state.value = 0
        },
    },
});

export const {incrementar , decrementar, reseterar} = counterSlice.actions;

export default counterSlice.reducer;