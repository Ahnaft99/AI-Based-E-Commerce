
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("/shop-api/api/v1/shop");
      if (!res.ok) {
        throw new Error(`HTTP Error: ${res.status}`);
      }

      const result = await res.json();

      console.log("API DATA:", result);

      return result;
    } catch (error) {
      console.error("API FETCH ERROR:", error);
      return rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "product",

  initialState: {
    data: [],
    isLoading: false,
    isError: false,
    errorMessage: "",
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })

      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.results || [];
      })

      .addCase(fetchProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage =
          action.payload || action.error.message;

        console.error("REDUX ERROR:", state.errorMessage);
      });
  },
});

export default productSlice.reducer;
