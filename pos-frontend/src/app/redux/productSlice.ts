import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: string;
  name: string;
  category: string;
  qty: string;
  desc:string;
  price: string;
  button: string;

}
interface Products{
    customers: Product[];
    selected?:{}
}

const initialState:Products={
    customers:[],
    selected:[]
}

const productSlice=createSlice({
    name:"product",
    initialState,
    reducers:{
        addProduct:((state:Products,action:PayloadAction<any>)=>{
            state.customers=action.payload
        }),
        getProduct:((state:Products,action:PayloadAction<any>)=>{
            state.selected=state.customers.filter((element)=>{
                return element.id===action.payload
            })
        })
    }
})

export const{addProduct,getProduct}=productSlice.actions
export default productSlice.reducer