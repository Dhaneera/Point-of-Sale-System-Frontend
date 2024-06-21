import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface count{
    value:number
}

const initialState:count={
    value:0
};

const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state,action:PayloadAction<count>)=>{
            state.value=action.payload.value
        }
    }
})

export const {increment} = counterSlice.actions
export default counterSlice.reducer;