import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    const res = await fetch("https://dummyjson.com/products");
    return res.json();
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.products; 
      })
      .addCase(fetchProduct.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default productSlice.reducer;