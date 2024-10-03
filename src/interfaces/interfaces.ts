import { SyntheticEvent } from "react"
import { FieldErrors, FieldValues, Path, UseFormRegister } from "react-hook-form";

export interface IState {
  news: INewsState,
  auth: IAuthState,
  users: IUsersState
}

export interface INews extends Record<string, unknown> {
  _id?: string,
  title?: string,
  date?: string,
  content?: string,
  url?: string,
  createdAt?: Date,
  author?: {
    _id: string,
    email: string,
    name: string
  }
}

export interface INewsState {
  newsList: INews[] | [],
  lastNews: INews[] | [],
  totalCount: number | null,
  newsItem: INews | null,
  currentNews: INews | null,
  isLoading: boolean,
  error: null | boolean
}

export interface IUser {
  id?: string,
  _id?: string,
  name?: string,
  email?: string,
  password?: string,
  role?: 'admin' | 'user',
  token?: string
}

export interface IAuthState {
  user: IUser | null,
  token: string | null,
  isLoading: boolean,
  error: boolean | null,
  isLoggedIn: boolean,
  isFetchingCurrUser: boolean
}

export interface IUsersState {
  allUsers: IUser[] | null,
  userInfo: IUser | null,
  isLoading: boolean,
  error: boolean | null,
}

export interface IError {
  response: {
    data: {
      code: number,
      status: string,
      message: string
    }
  }
}

export interface IPagination {
  clickHandler: (e: SyntheticEvent<HTMLButtonElement>, page: number) => void,
  limit: number
}

export interface ILoginForm extends Record<string, unknown> {
  email: string,
  password: string
}

export interface IRegisterForm extends Record<string, unknown> {
  name: string,
  email: string,
  password: string
}

export interface IUserInfo extends Record<string, unknown> {
  name: string,
  email: string,
  role: string
}

export interface IFormField<TFormValues extends FieldValues> {
  label: string,
  type?: string,
  name: Path<TFormValues>,
  required?: boolean,
  height?: number,
  register: UseFormRegister<TFormValues>,
  errors?: FieldErrors<TFormValues>,
  value?: string,
  readonly?: boolean,
  options?: string[],
  pattern?: RegExp,
  minLength?: number
}

export interface IButtonProps {
  text: string,
  isLoading?: boolean,
  type?: "submit" | "reset" | "button" | undefined,
  onClick?: () => void,
  disabled?: boolean,
  width?: number
}