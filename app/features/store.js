import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
import logger from 'redux-logger'
import cartReducer from "./cart/cartSlice";


const persistConfig = {
    key: "root",
    storage
}

const store = configureStore({
    reducer: {
        cart: persistReducer(persistConfig, cartReducer),

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== "production"

})

export const persistor = persistStore(store)

export default store
