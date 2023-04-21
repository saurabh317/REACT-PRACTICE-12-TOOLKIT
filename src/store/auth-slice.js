import {createSlice} from "@reduxjs/toolkit";

const initialAuthState = {isAuth : false};

export const authSlice = createSlice({
  name:"authenticate",
  initialState:initialAuthState,
  reducers:{
    login(state) {
      state.isAuth = true
    },
    logout(state) {
      state.isAuth = false
    }
  }
})

export const AuthActions = authSlice.actions;