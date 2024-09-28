import { IState } from "../../interfaces/interfaces";

export const selectAllUsers = (state: IState) => state.users.allUsers;
export const selectUserInfo = (state: IState) => state.users.userInfo;
export const selectIsLoading = (state: IState) => state.users.isLoading;
export const selectError = (state: IState) => state.users.error;