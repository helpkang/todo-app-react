import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../ioc/interfaceRepository";

const todos = localStorage.getItem("todos") || [];

let parsed;

if (typeof todos === "string") {
    parsed = JSON.parse(todos);
}

const initialState: Todo[] = parsed || [];

const TodoSlice = createSlice({
    name: "todo",
    initialState:  initialState,
    reducers: {
        addTodo: (state, action:PayloadAction<Todo>) => {
            state.push(action.payload);
        },
        setTodo(_, action: PayloadAction<Todo[]>) {
            return action.payload;
        }
    },
});

export const { addTodo, setTodo } =
    TodoSlice.actions;

export default TodoSlice.reducer;
