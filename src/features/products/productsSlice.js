import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  products: [],
  isLoading: false,
  error: null
}

export const fetchProducts = createAsyncThunk ('products/fetchProducts', 
    async () => {
        const res = await axios.get('http://localhost:3005/products');
        return (res.data)
    }
)

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchProducts.pending, (state) =>{
        state.isLoading = true;
        state.error = null;
    })
    .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
    })
    .addCase(fetchProducts.rejected, (state, action) => {
        state.error = "Failed to fetch data" || action.error.message
    })
  }

})



export default productsSlice.reducer