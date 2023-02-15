import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./todos-slice";
import ThemeReducer from "./theme-slice";

export const store = configureStore({
    reducer: {
        todos: TodoReducer,
        theme: ThemeReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
