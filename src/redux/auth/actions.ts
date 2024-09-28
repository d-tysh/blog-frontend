import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IError, IUser } from "../../interfaces/interfaces";
import { toast } from "react-toastify";
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
    async ({ name, email, password }: IUser, thunkApi) => {
        try {
            const response = await axios.post(`/users/register`, { name, email, password });
            toast.success(response.data.message);
        } catch (error) {
            const { response } = error as IError;
            toast.error(response.data.message);
            return thunkApi.rejectWithValue((error as Error));
        }
    }
)

export const login = createAsyncThunk(
    'users/login',
    async ({ email, password }: IUser, thunkApi) => {
        try {
            const { data } = await axios.post(`/users/login`, { email, password });
            setAuthHeader(data.data.token);
            return data;
        } catch (error) {
            const { response } = error as IError;
            toast.error(response.data.message);
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
            const { response } = error as IError;
            toast.error(response.data.message);
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