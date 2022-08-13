import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    basket: [],
    user: null
}

export const getBasketTotal = (basket) => {
    return basket?.reduce((amount, item) => item.price + amount, 0)
}


const stateSlice = createSlice({
    name: 'amazon-clone',
    initialState, reducers: {
        ADD_TO_BASKET(state, action) {
            state.basket = [...state.basket, action.payload.item]
            state.user = state.user
        },
        EMPTY_BASKET(state) {
            state.basket = []
            state.user = state.user
        },
        REMOVE_FROM_BASKET(state, action) {
            const index = state.basket.findIndex((item) => item.id === action.payload.id);
            let newBasket = [...state.basket]
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`item not in basket with index ${index}`)
            }
            console.log(newBasket)
            state.basket = newBasket;
            state.user = state.user
        },
        SET_USER(state, action) {
            console.log(action)
            state.basket = state.basket
            state.user = action.payload.user
        }
    }
})


export const { ADD_TO_BASKET, EMPTY_BASKET, REMOVE_FROM_BASKET, SET_USER } = stateSlice.actions;
export default stateSlice.reducer;