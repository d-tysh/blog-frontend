import { createSlice } from "@reduxjs/toolkit";
import { IAuthState } from "../../interfaces/interfaces";
import { fetchCurrentUser, login, logout, register } from "./actions";

const usersInitState: IAuthState = {
    user: null,
    token: null,
    isLoading: false,
    error: null,
    isLoggedIn: false,
    isFetchingCurrUser: false
}

const handlePenging = (state: IAuthState) => {
    state.isLoading = true;
    state.error = null;
}

const handleRejected = (state: IAuthState) => {
    state.isLoading = false;
    state.error = true;
}

const authSlice = createSlice({
    name: 'auth',
    initialState: usersInitState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(register.pending, handlePenging)
            .addCase(register.fulfilled, (state) => {
                state.isLoading = false;
                state.error = null;
            })
            .addCase(register.rejected, handleRejected)

            .addCase(login.pending, handlePenging)
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.data;
                state.token = action.payload.data.token;
                state.isLoggedIn = true;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(login.rejected, handleRejected)

            .addCase(logout.pending, handlePenging)
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
                state.token = null;
                state.isLoggedIn = false;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(logout.rejected, handleRejected)

            .addCase(fetchCurrentUser.pending, (state) => {
                state.isFetchingCurrUser = true;
            })
            .addCase(fetchCurrentUser.fulfilled, (state, action) => {
                state.user = action.payload.data;
                state.isLoggedIn = true;
                state.isFetchingCurrUser = false;
            })
            .addCase(fetchCurrentUser.rejected, (state) => {
                state.user = null;
                state.token = null;
                state.isFetchingCurrUser = false;
                state.isLoggedIn = false;
            })
    }
})

export const authReducer = authSlice.reducer;