import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: { items: null  },
    reducers: {
        setCart: (state, action) => {
            const { items } = action.payload
            state.items = items
        },
        logOut: (state, action) => {
            state.items = null
        }
    }
})

export const { setCredentials, logOut } = cartSlice.actions

export default cartSlice.reducer

export const selectCurrentCart = (state) => state.cart.items