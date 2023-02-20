import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./todos-slice";
export const store = configureStore({
    reducer: {
        todos: TodoReducer,
    },
});
