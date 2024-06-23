import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface cart{
    id: number;
    name: string;
    price: number;
    quantity: number;
}
interface carts{
    carts: cart[];
}
const initialState:carts={
    carts:[
        {
            id: 0,
            name: "",
            price: 0,
            quantity: 0,
        },
    ]
}

const cartReducer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
       addProduct:((state:any,action:PayloadAction<carts>)=>{
            state=[
                ...state,
                action.payload
            ]
       }),
       removeCart:((state:any,action:PayloadAction<carts>)=>{
        
       })
    }
})


export const {addProduct}=cartReducer.actions
export default cartReducer.actions