import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./users.service";


const initialState = {
  users:[],
  validateUser:"",
  deleteUser:"",
  checkQueries:"",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getAllUsersAction = createAsyncThunk(
  "users/getAllUsersAction",
  async ({ finalData, notifyToaster }, thunkAPI) => {
    try {
      const response = await userService.getAllUsers(finalData);
      // if (response.succeeded === true) {
      //   if (notifyToaster) {
      //     notifyToaster();
      //   }
      // } else {
      //   notifyToaster(response.message, "error");
      // }
      return response;
    } catch (error) {
      notifyToaster(error.message, "error");
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


export const validateUserAction = createAsyncThunk(
  "users/validateUserAction",
  async ({ finalData, notifyToaster }, thunkAPI) => {
    try {
      const response = await userService.validateUser(finalData);
      // if (response.succeeded === true) {
      //   if (notifyToaster) {
      //     notifyToaster();
      //   }
      // } else {
      //   notifyToaster(response.message, "error");
      // }
      return response;
    } catch (error) {
      notifyToaster(error.message, "error");
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

export const deleteUserAction = createAsyncThunk(
  "users/deleteUserAction",
  async ({ finalData, notifyToaster }, thunkAPI) => {
    try {
      const response = await userService.deleteUser(finalData);
      // if (response.succeeded === true) {
      //   if (notifyToaster) {
      //     notifyToaster();
      //   }
      // } else {
      //   notifyToaster(response.message, "error");
      // }
      return response;
    } catch (error) {
      notifyToaster(error.message, "error");
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



export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsersAction.pending, (state) => {
        state.isLoading = true;
        state.message = "";
      })
      .addCase(getAllUsersAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.getAllUsers = action.payload;
      })
      .addCase(getAllUsersAction.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.isError = true;
        state.getAllUsers = null;
      })

      .addCase(validateUserAction.pending, (state) => {
        state.isLoading = true;
        state.message = "";
      })
      .addCase(validateUserAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.validateUser = action.payload;
      })
      .addCase(validateUserAction.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.isError = true;
        state.getAllUsers = null;
      })

      .addCase(deleteUserAction.pending, (state) => {
        state.isLoading = true;
        state.message = "";
      })
      .addCase(deleteUserAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.deleteUser = action.payload;
      })
      .addCase(deleteUserAction.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.isError = true;
        state.getAllUsers = null;
      })

  },
});

export const { reset } = usersSlice.actions;

export default usersSlice.reducer;
