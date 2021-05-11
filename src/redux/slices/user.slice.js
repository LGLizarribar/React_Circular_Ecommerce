import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { checkSession, login, logout, register } from "../../api/auth";

export const checkSessionAsync = createAsyncThunk(
    "user/checkSession",
    async () => {
        return await checkSession();
    }
);

export const loginAsync = createAsyncThunk(
    "user/login",
    async (form) => {
        return await login(form);
    }
)

export const registerAsync = createAsyncThunk(
    "user/register",
    async (form) => {
        return await register(form);
    }
)

const INITIAL_STATE = {
  user: null,
  hasUser: null,
  error: '',
};

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
      logoutUser: async (state, action) => {
          const actualState = current(state);
          console.log('current state :', actualState);
          await logout();
          state.user = null;
          state.hasUser = null;
          state.error = '';
      }
  },
  extraReducers: (builder) => {
    builder.addCase(checkSessionAsync.fulfilled, (state, action) => {
         if(!action.payload.message) {
            state.user = action.payload;
            state.hasUser = true;
            state.error = '';
        } else {
            state.hasUser = false;
        }
    });
    builder.addCase(loginAsync.fulfilled, (state, action) => {
        if(!action.payload.message) {
            state.user = action.payload;
            state.hasUser = true;
            state.error = '';
        } else {
            state.hasUser = false;
            state.error = action.payload.message;
        }
    });
    builder.addCase(registerAsync.fulfilled, (state, action) => {
        if(!action.payload.message) {
            state.user = action.payload;
            state.hasUser = true;
            state.error = '';
        } else {
            state.hasUser = false;
            state.error = action.payload.message;
        }
    });
  },
});

export const { logoutUser } = userSlice.actions;