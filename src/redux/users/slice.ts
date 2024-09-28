import { createSlice } from "@reduxjs/toolkit";
import { IUsersState } from "../../interfaces/interfaces";
import { deleteUserById, getAllUsers, getUserInfo, updateUserInfo } from "./actions";

const usersInitState: IUsersState = {
    allUsers: null,
    userInfo: null,
    isLoading: false,
    error: null,
}

const handlePenging = (state: IUsersState) => {
    state.isLoading = true;
    state.error = null;
}

const handleRejected = (state: IUsersState) => {
    state.isLoading = false;
    state.error = true;
}

const usersSlice = createSlice({
    name: 'users',
    initialState: usersInitState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAllUsers.pending, handlePenging)
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.allUsers = action.payload.results;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(getAllUsers.rejected, handleRejected)

            .addCase(getUserInfo.pending, handlePenging)
            .addCase(getUserInfo.fulfilled, (state, action) => {
                state.userInfo = action.payload.result;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(getUserInfo.rejected, handleRejected)

            .addCase(updateUserInfo.pending, (state) => {
                state.userInfo = null;
                handlePenging(state);
            })
            .addCase(updateUserInfo.fulfilled, (state) => {
                state.isLoading = false;
                state.error = null;
            })
            .addCase(updateUserInfo.rejected, handleRejected)

            .addCase(deleteUserById.pending, handlePenging)
            .addCase(deleteUserById.fulfilled, (state) => {
                state.isLoading = false;
                state.error = null;
            })
            .addCase(deleteUserById.rejected, handleRejected)
    }
})

export const usersReducer = usersSlice.reducer;