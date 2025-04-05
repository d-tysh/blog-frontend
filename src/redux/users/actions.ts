import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUserInfo } from "../../interfaces/interfaces";

const { VITE_API_URL } = import.meta.env;

axios.defaults.baseURL = VITE_API_URL;

export const getAllUsers = createAsyncThunk(
    'users/getAllUsers',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/users');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const getUserInfo = createAsyncThunk(
    'users/getUserInfo',
    async (id: string, thunkAPI) => {
        try {
            const response = await axios.get(`/users/${id}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const updateUserInfo = createAsyncThunk(
    'users/updateUserInfo',
    async ({userId, userInfo}: {userId: string, userInfo: IUserInfo}, thunkAPI) => {
        try {
            const response = await axios.patch(`/users/${userId}`, userInfo);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const deleteUserById = createAsyncThunk(
    'users/deleteUserById',
    async (id: string, thunkAPI) => {
        try {
            const { data } = await axios.delete(`users/${id}`);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)