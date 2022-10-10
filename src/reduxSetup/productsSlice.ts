import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ProductsState } from '../../types/reduxProducts'

const initialState: ProductsState = {
  items: [],
  count: 0,
  status: 'idle' // 'loading' | 'succeeded' | 'failed'
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const res = await fetch('/api/products');
    const data = await res.json();
    return data
  }
)

export const productsSlice = createSlice({
  name: 'productsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => ({
      ...state,
      status: 'succeeded',
      count: action.payload.length,
      items: action.payload
    }))
    builder.addCase(fetchProducts.pending, (state) => ({ ...state, status: 'loading' }))
    builder.addCase(fetchProducts.rejected, (state) => ({ ...state, status: 'failed' }))
  },
})

export default productsSlice.reducer