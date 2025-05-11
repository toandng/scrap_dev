import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../../services/authService";

const initialState = {
  user: null,
  loading: true,
};

export const fetchAuthUser = createAsyncThunk(
  "auth/getCurrentUser",
  async () => {
    const data = await authService.getCurrentUser();
    return data.data;
  }
);

const authSlile = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAuthUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(fetchAuthUser.rejected, (state) => {
        state.user = null;
        state.loading = false;
        state.currentUser = null;
      });

    //   login
  },
});

export default authSlile.reducer;
