import { IState } from "../../interfaces/interfaces";

export const selectNewsList = (state: IState) => state.news.newsList;
export const selectLastNews = (state: IState) => state.news.lastNews;
export const selectTotalCount = (state: IState) => state.news.totalCount;
export const selectNewsItem = (state: IState) => state.news.newsItem;
export const selectCurrentNews = (state: IState) => state.news.currentNews;
export const selectIsLoading = (state: IState) => state.news.isLoading;
export const selectError = (state: IState) => state.news.error;