import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import querieservice from "./queries.service";


const initialState = {
  checkQueries:"",
  addQueries:"",
  getQueryHistory:[],
  getQueryHistoryDetails:[],
  isError: false,
  isSuccess: false,
  isLoading: false,
  isQueryLoading: false,
  isHistoryLoading: false,
  isHistoryDetailsLoading:false,
  message: "",
};
export const checkQueriesAction = createAsyncThunk(
  "queries/checkQueriesAction",
  async (_, thunkAPI) => {
    try {
      const response = await querieservice.checkQueries();
      // if (response.succeeded === true) {
      //   if (notifyToaster) {
      //     notifyToaster();
      //   }
      // } else {
      //   notifyToaster(response.message, "error");
      // }
      return response;
    } catch (error) {
      // notifyToaster(error.message, "error");
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

export const addQueriesAction = createAsyncThunk(
  "queries/addQueriesAction",
  async ({finalData,moveToNext}, thunkAPI) => {
    try {
      const response = await querieservice.addQueries(finalData);
      if (response?.Simple_Response) {
        moveToNext();
      } 
      return response;
    } catch (error) {
      // notifyToaster(error.message, "error");
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

export const getQueryHistoryAction = createAsyncThunk(
  "queries/getQueryHistoryAction",
  async ({userId}, thunkAPI) => {
    try {
      const response = await querieservice.getQueryHistory(userId);
            
      return response?.Data;
    } catch (error) {
      // notifyToaster(error.message, "error");
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


export const getQueryHistoryDetailsAction = createAsyncThunk(
  "queries/getQueryHistoryDetailsAction",
  async ({finalData}, thunkAPI) => {
    try {
      const response = await querieservice.getQueryHistoryDetails(finalData);
            
      return response?.Data;
    } catch (error) {
      // notifyToaster(error.message, "error");
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

export const queriesSlice = createSlice({
  name: "queries",
  initialState,
  reducers: {
    reset: (state) => {
      state.addQueries="";
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkQueriesAction.pending, (state) => {
        state.isLoading = true;
        state.checkQueries = "";
      })
      .addCase(checkQueriesAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.checkQueries = action.payload;
        // debugger;
        // console.log(action.payload)
      })
      .addCase(checkQueriesAction.rejected, (state,action) => {
        state.message = "";
        state.isLoading = false;
        state.isError = true;
        state.checkQueries = action.payload;
        console.log("action.payload",action.payload);
      })

      .addCase(addQueriesAction.pending, (state) => {
        state.isQueryLoading = true;
        state.message = "";
      })
      .addCase(addQueriesAction.fulfilled, (state, action) => {
        state.isQueryLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.addQueries = action.payload;
      })
      .addCase(addQueriesAction.rejected, (state) => {
        state.message = "";
        state.isQueryLoading = false;
        state.isError = true;
        state.addQueries = null;
      })

      .addCase(getQueryHistoryAction.pending, (state) => {
        state.isHistoryLoading = true;
        state.message = "";
        state.getQueryHistory = [];
      })
      .addCase(getQueryHistoryAction.fulfilled, (state, action) => {
        state.isHistoryLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.getQueryHistory = action.payload;
      })
      .addCase(getQueryHistoryAction.rejected, (state, action) => {
        state.message = action.payload;
        state.isHistoryLoading = false;
        state.isError = true;
        state.getQueryHistory = [];
      })

      .addCase(getQueryHistoryDetailsAction.pending, (state) => {
        state.isHistoryLoading = true;
        state.message = "";
      })
      .addCase(getQueryHistoryDetailsAction.fulfilled, (state, action) => {
        state.isHistoryDetailsLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.getQueryHistoryDetails = action.payload;
      })
      .addCase(getQueryHistoryDetailsAction.rejected, (state, action) => {
        state.message = action.payload;
        state.isHistoryDetailsLoading = false;
        state.isError = true;
        state.getQueryHistoryDetails = null;
      })
  },
});

export const { reset } = queriesSlice.actions;

export default queriesSlice.reducer;
