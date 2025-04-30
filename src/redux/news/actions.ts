import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { INews, INewsCommentForm } from "../../interfaces/interfaces";

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
            const response = await axios.get(`/news/id/${id}`);
            return response.data.result;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
)

export const fetchNewsByURL = createAsyncThunk(
    'news/fetchNewsByURL',
    async (url: string, thunkApi) => {
        try {
            const response = await axios.get(`/news/${url}`);
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
                throw new Error("Error: news not added");
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

export const addComment = createAsyncThunk(
    'news/addComment',
    async ({newsId, data}: {newsId: string, data: INewsCommentForm}, thunkApi) => {
        try {
            const response = await axios.patch(`/news/${newsId}/comment`, data);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
)

export const setCurrentNews = createAction<INews | null>('news/setCurrentNews');