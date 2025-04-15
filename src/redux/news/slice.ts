import { createSlice } from "@reduxjs/toolkit"
import { addNews, fetchLastNews, fetchNews, fetchNewsById, fetchNewsByURL, updateNews } from "./actions";
import { INews, INewsState } from "../../interfaces/interfaces";

const newsInitState: INewsState = {
    newsList: [],
    lastNews: [],
    totalCount: null,
    newsItem: null,
    currentNews: null,
    isLoading: false,
    error: null
}

const handlePenging = (state: INewsState) => {
    state.isLoading = true;
    state.error = null;
}

const handleRejected = (state: INewsState) => {
    state.isLoading = false;
    state.error = true;
}

const newsSlice = createSlice({
    name: 'news',
    initialState: newsInitState,
    reducers: {
        setCurrentNews: (state, action) => {
            state.currentNews = action.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchNews.pending, handlePenging)
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.newsList = action.payload.results as INews[];
                state.totalCount = action.payload.totalCount;
                state.isLoading = false;
                state.error = null
            })
            .addCase(fetchNews.rejected, handleRejected)

            .addCase(fetchLastNews.pending, handlePenging)
            .addCase(fetchLastNews.fulfilled, (state, action) => {
                state.lastNews = action.payload.results as INews[];
                state.isLoading = false;
                state.error = null
            })
            .addCase(fetchLastNews.rejected, handleRejected)

            .addCase(fetchNewsById.pending, handlePenging)
            .addCase(fetchNewsById.fulfilled, (state, action) => {
                state.newsItem = action.payload as INews;
                state.isLoading = false;
                state.error = null
            })
            .addCase(fetchNewsById.rejected, handleRejected)

            .addCase(fetchNewsByURL.pending, handlePenging)
            .addCase(fetchNewsByURL.fulfilled, (state, action) => {
                state.newsItem = action.payload as INews;
                state.isLoading = false;
                state.error = null
            })
            .addCase(fetchNewsByURL.rejected, handleRejected)

            .addCase(addNews.pending, handlePenging)
            .addCase(addNews.fulfilled, (state) => {
                state.isLoading = false;
                state.error = null;
            })
            .addCase(addNews.rejected, handleRejected)

            .addCase(updateNews.pending, handlePenging)
            .addCase(updateNews.fulfilled, (state) => {
                state.isLoading = false;
                state.error = null;
            })
            .addCase(updateNews.rejected, handleRejected)
    }
})

export const newsReducer = newsSlice.reducer;