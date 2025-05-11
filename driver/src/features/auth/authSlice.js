import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authServices from "../../services/authServices";

const initialState = {
  user: null,
  loading: true,
};
// getUser
export const fetchAuthUser = createAsyncThunk(
  "auth/getCurrentUser",
  async () => {
    const data = await authServices.getCurrentUser();
    return data.data;
  }
);
// loginUser
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const res = await authServices.login({ email, password });
      const token = res.data?.access_token;
      const refreshToken = res.data?.refresh_token;
      if (token && refreshToken) {
        localStorage.setItem("token", token);
        localStorage.setItem("refresh_token", refreshToken);
        return res.data;
      } else {
        return rejectWithValue("Thông tin đăng nhập không hợp lệ");
      }
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          "Đăng nhập thất bại. Vui lòng điền lại thông tin"
      );
    }
  }
);

// logoutUser
export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  try {
    await authServices.logout();
  } catch (error) {
    console.log(error);
  }
  localStorage.removeItem("token");
  localStorage.removeItem("refresh_token");
  return null;
});

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
      })
      // logout
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.loading = false;
      })
      .addCase(logoutUser.rejected, (state) => {
        state.currentUser = null;
        state.loading = false;
      })

      // login

      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state) => {
        state.user = null;
        state.loading = false;
      });
  },
});

export default authSlile.reducer;
