import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUserLogin, IUserRegister } from "../../interfaces/interfaces";
import { RootState } from "../store";

const { VITE_API_URL } = import.meta.env;

axios.defaults.baseURL = VITE_API_URL;

const setAuthHeader = (token: string) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
}

export const register = createAsyncThunk(
    'users/register',
    async ({ name, email, password }: IUserRegister, thunkApi) => {
        try {
            const response = await axios.post(`/users/register`, { name, email, password });
            return response;
        } catch (error) {
            return thunkApi.rejectWithValue(error as Error);
        }
    }
)

export const login = createAsyncThunk(
    'users/login',
    async ({ email, password }: IUserLogin, thunkApi) => {
        try {
            const { data } = await axios.post(`/users/login`, { email, password });
            setAuthHeader(data.data.token);
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue((error as Error));
        }
    }
)

export const logout = createAsyncThunk(
    'users/logout',
    async (_, thunkApi) => {
        try {
            await axios.post(`/users/logout`);
            clearAuthHeader();
        } catch (error) {
            return thunkApi.rejectWithValue((error as Error));
        }
    }
)

export const fetchCurrentUser = createAsyncThunk(
    'users/fetchCurrentUser',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState() as RootState;
        const persistedToken = state.auth.token;

        if (!persistedToken) {
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }

        try {
            setAuthHeader(persistedToken);
            const response = await axios.get('/users/current');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)