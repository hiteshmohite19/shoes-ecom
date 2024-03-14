import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    cart: [],
    products: [],
    filtered_products : []
}

export const fetch_products = createAsyncThunk('fetchProducts', async () => {
    const products_data = await axios.get('http://localhost:8000/api/products/')
    console.log('api call ',products_data.data);
    return products_data.data
})


export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        filtered_products: (state, action) => {

        }
    },
    extraReducers(builder) {
        builder.addCase(fetch_products.fulfilled, (state, action) => {
            state.products = action.payload
            console.log('extra reducers ', state.products);
        })
    }
})

export const { filtered_products } = productsSlice.actions

export default productsSlice.reducer