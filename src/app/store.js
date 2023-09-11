import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/auth.slice";
import usersReducer from "./features/users/users.slice";
import queriesReducer from "./features/queries/queries.slice"

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    queries: queriesReducer,
  },
});

export default store;
