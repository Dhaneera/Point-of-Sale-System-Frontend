import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  button: string;

}
interface Customers{
    customers: Customer[];
    selected?:{}
}

const initialState:Customers={
    customers:[],
    selected:[]
}

const customerSlice=createSlice({
    name:"customers",
    initialState,
    reducers:{
        addCustomer:((state:Customers,action:PayloadAction<any>)=>{
            state.customers=action.payload
        }),
        getCustomer:((state:Customers,action:PayloadAction<any>)=>{
            state.selected=state.customers.filter((element)=>{
                return element.id===action.payload
            })
        })
    }
})

export const{addCustomer,getCustomer}=customerSlice.actions
export default customerSlice.reducer