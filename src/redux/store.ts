import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { newsReducer } from "./news/slice";
import { authReducer } from "./auth/slice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { usersReducer } from "./users/slice";

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
}

export const rootReducer = combineReducers({
    news: newsReducer,
    auth: persistReducer(authPersistConfig, authReducer),
    users: usersReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false}),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);