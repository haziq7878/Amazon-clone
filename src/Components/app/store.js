import { configureStore } from "@reduxjs/toolkit";
import stateReducer from '../Features/Reducer'
import { getDefaultMiddleware } from '@reduxjs/toolkit';



export const store = configureStore({
    reducer: {
        stateReducer: stateReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

