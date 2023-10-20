import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: {

        }
    },
    reducers: {
        addItem: (state, action) => {
            const { id, qty } = action.payload
            if (id in state.cart) {
                state.cart[ id ] += qty
                return
            }

            state.cart[ id ] = qty
        },
        updateItem: (state, action) => {
            const { id, axn } = action.payload
            if (axn === "add") {
                state.cart[ id ] += 1
                return
            }

            if (axn === "minus") {
                state.cart[ id ] -= 1
                return
            }
        },
        removeItem: (state, action) => {
            const { id } = action.payload
            delete state.cart[ id ]
        }, clearCart: (state, action) => {
            state.cart = {}
        }

    }
})

//selectors
export const selectCartItems = state => state.cart.cart

export const selectCartCount = state => Object.values(state.cart.cart).reduce((acc, val) => acc + val, 0)

//action creators
export const { addItem, updateItem, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer

