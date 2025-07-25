import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    // this function takes a configuration to create a slice
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {

        // action = addItem, removeItem, clearCart        
        // reducer function = callback function () 
        // reducer function that dispatch(action) calls

        addItem: (state, action) => {
            // BTS
            // Vanilla Redux = DON'T MUTATE STATE, return new state is mandatory
            // const newState = [...state];
            // newState.items.push(action.payload);
            // return newState;
            // Redux uses IMMER library to do this
            // IMMER: a tiny package that allows you to work with immutable state in a more convenient way.

            // Redux Toolkit
            // We have to mutate the state
            // mutating(changing) the state here
            state.items.push(action.payload);

        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state) => {
            // It is not mutating the state\
            // it is just chnaging the refrence to it
            // It changes the local state only
            // state = [];
            // You actually have to change the state
            // state.items = [];
            // or 
            // state.items.length = 0;
            // or
            return {items: []};
            // whatever you return it replace/modify the original state

            // To view the state
            // wrong method // This shows you a proxy object
            // You can not read it

            console.log(state);
            // use current() from redux/toolkit

            console.log(current(state));
        },
    },
})
// named export import as {}
export const {addItem, removeItem, clearCart} = cartSlice.actions;
// default export
export default cartSlice.reducer;