import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { INews } from "../../interfaces/interfaces";

const { VITE_API_URL } = import.meta.env;

axios.defaults.baseURL = VITE_API_URL;

export const fetchNews = createAsyncThunk(
    'news/fetchNews',
    async ({page, limit}: {page?: number, limit?: number}, thunkApi) => {
        try {
            const response = await axios.get(`/news?page=${page}&limit=${limit}`);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
)

export const fetchLastNews = createAsyncThunk(
    'news/fetchLastNews',
    async (limit: number, thunkApi) => {
        if (limit < 1) limit = 1; 
        try {
            const response = await axios.get(`/news?&limit=${limit}`);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
)

export const fetchNewsById = createAsyncThunk(
    'news/fetchNewsById',
    async (id: string, thunkApi) => {
        try {
            const response = await axios.get(`/news/${id}`);
            return response.data.result;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
)

export const addNews = createAsyncThunk(
    'news/addNews',
    async (data: INews, thunkApi) => {
        try {
            const response = await axios.post('/news', data);
            if (response.status !== 201) {
                return thunkApi.rejectWithValue('Invalid status code');
            }
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
)

export const updateNews = createAsyncThunk(
    'news/updateNews',
    async ({id, data}: {id: string, data: INews}, thunkApi) => {
        try {
            const response = await axios.patch(`/news/${id}`, data);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
)

export const deleteNews = createAsyncThunk(
    'news/deleteNews',
    async (id: string, thunkApi) => {
        try {
            const response = await axios.delete(`/news/${id}`);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
)

export const setCurrentNews = createAction<INews | null>('news/setCurrentNews');