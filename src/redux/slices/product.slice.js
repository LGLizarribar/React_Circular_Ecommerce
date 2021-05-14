import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllProducts } from '../../api/products';

const INITIAL_STATE = {
    all: [],
};

export const getAllProductsAsync = createAsyncThunk('products', async () => {
    return await getAllProducts();
})

export const productSlice = createSlice({
    name: 'products',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProductsAsync.fulfilled, (state, action) => {
            state.all = action.payload;
        });
    }
});