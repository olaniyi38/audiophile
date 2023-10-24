import { createSlice } from "@reduxjs/toolkit";
import products from '../../data/products.json'

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: {
            2: 3,
            1: 4,
            5: 9
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
export const selectCartItems = state => {
    const items = Object.entries(state.cart.cart)

    const cartItems = items.map(([ id, qty ]) => {
        const productData = products.find((prd) => prd.id == id);
        const { shortName, image, price } = productData;

        return { shortName, image, price, qty, id };
    });

    return cartItems
}

export const selectCartCount = state => Object.values(state.cart.cart).reduce((acc, val) => acc + val, 0)

export const selectCartTotal = state => {
    const items = Object.entries(state.cart.cart)

    const cartItems = items.map(([ id, qty ]) => {
        const productData = products.find((prd) => prd.id == id);
        const { shortName, image, price } = productData;

        return { shortName, image, price, qty, id };
    });

    return cartItems.reduce((acc, prd) => acc + prd.price * prd.qty, 0)

};


//action creators
export const { addItem, updateItem, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer

