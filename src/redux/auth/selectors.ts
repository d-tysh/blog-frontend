import { IState } from "../../interfaces/interfaces";

export const selectUser = (state: IState) => state.auth.user;
export const selectIsLoggedIn = (state: IState) => state.auth.isLoggedIn;
export const selectIsFetchingCurrUser = (state: IState) => state.auth.isFetchingCurrUser;
export const selectIsLoading = (state: IState) => state.auth.isLoading;
export const selectError = (state: IState) => state.auth.error;