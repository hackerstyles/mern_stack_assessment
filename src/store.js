import { configureStore } from "@reduxjs/toolkit";

import crudItem from './features/createSlice'

export const store = configureStore({
    reducer:{
        item:crudItem
    }
})

export default store