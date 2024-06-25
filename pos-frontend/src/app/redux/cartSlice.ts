import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Cart {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface Carts {
  carts: Cart[];
}

const initialState: Carts = {
  carts: []
}

const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Cart>) => {
      state.carts.push(action.payload);
    },
    removeCart: (state, action: PayloadAction<any>) => {
      state.carts = state.carts.filter(cart => cart.name !== action.payload.name);
    },
    increaseQuantityPrice: (state, action: PayloadAction<any>) => {
      state.carts.forEach(cart => {
        if (cart.name === action.payload.name) {
          cart.quantity++;
          cart.price += action.payload.price;
        }
      });
    },
    decreaseQuantityPrice:(state:Carts,action:PayloadAction<any>)=>{
        state.carts.forEach(cart => {
            if (cart.name === action.payload.name) {
              cart.quantity--;
              cart.price -= action.payload.price;
            }
          });
    },
    removeData:((state)=>{
        state.carts=[];
    })
  }
})

export const { addProduct, increaseQuantityPrice, removeCart,decreaseQuantityPrice,removeData } = cartReducer.actions;
export default cartReducer.reducer;
