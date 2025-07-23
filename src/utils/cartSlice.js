import { createSlice } from "@reduxjs/toolkit";

import React from 'react'

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItems: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (action) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
}
);

export const { addItems, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;