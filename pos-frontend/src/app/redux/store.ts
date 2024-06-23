import { configureStore } from "@reduxjs/toolkit";
import CartSlice from './cartSlice'

const store = configureStore({
    reducer: {
        cartSlice:CartSlice
    }
})
export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch