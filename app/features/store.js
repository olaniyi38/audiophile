import { configureStore } from "@reduxjs/toolkit";
import { env } from "process";
import logger from 'redux-logger'
import cartSlice from "./cart/cartSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== "production"

})

export default store
