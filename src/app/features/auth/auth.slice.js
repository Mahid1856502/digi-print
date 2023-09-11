import { notification } from "antd";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./auth.service";

// Get user from localStorage
const competitionAiUser = JSON.parse(localStorage.getItem("competitionai_user"));
const initialState = {
  user: competitionAiUser || null,

  isLoginError: false,
  isLoginSuccess: false,
  isLoginLoading: false,
  loginMessage: "",

  isRegisterError: false,
  isRegisterSuccess: false,
  isRegisterLoading: false,
  registerMessage: "",

  isLoggedIn: false,
};

export const loginAction = createAsyncThunk(
  "auth/loginAction",
  async ({ finalData }, thunkAPI) => {
    try {
      const response = await authService.login(finalData);
      if (response) {
        notification.success({
          message: response?.message,
        });
      }
      return response;
    } catch (error) {
      notification.error({
        message: "Enter valid credentials!",
      });
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Registration user
export const signupAction = createAsyncThunk(
  "auth/signupAction",
  async ({ finalData, moveToNext }, thunkAPI) => {
    try {
      const response = await authService.signup(finalData);
      if (response?.data) {
              notification.success({
        message: response?.data?.message,
      });
        moveToNext()
      } 
      return response;
    } catch (error) {
           notification.error({
        message: error?.errorMessage?.message,
      });
      // notifyToaster(error?.message, false);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.isSuccess = false;
    },
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state) => {
        state.isLoading = true;
        state.message = "";
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.isError = true;
        state.user = null;
      })

      .addCase(signupAction.pending, (state) => {
        state.isLoading = true;
        state.message = "";
      })
      .addCase(signupAction.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        // state.user = action.payload;
      })
      .addCase(signupAction.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.isError = true;
        state.user = null;
      })

      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
