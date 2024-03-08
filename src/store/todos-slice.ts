import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../hooks/useTodo";

const todosString = localStorage.getItem("todos") || [];

let todos: Todo[] = [];

if (typeof todosString === "string") {
  todos = JSON.parse(todosString);
}

const TodoSlice = createSlice({
  name: "todo",
  initialState: todos || [],
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    setTodo(_, action: PayloadAction<Todo[]>) {
      return action.payload;
    },
  },
});

export const { addTodo, setTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
