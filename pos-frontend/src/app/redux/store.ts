import { configureStore } from "@reduxjs/toolkit";
import CartSlice from './cartSlice'
import CustomerSlice from "./CustomerSlice";
import productSlice from "./productSlice";

const store = configureStore({
    reducer: {
        cartSlice:CartSlice,
        customerSlice:CustomerSlice,
        productSlice:productSlice
    }
})
export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch