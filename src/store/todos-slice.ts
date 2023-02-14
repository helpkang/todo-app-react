import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todos } from "../assets/FakeData";

// interface TodoState {
//     id: number;
//     name: string;
//     completed: boolean;
// }

const initialState = Todos;

const TodoSlice = createSlice({
    name: "todo",
    initialState: { value: Todos },
    reducers: {
        addTodo: (state,action) => {
            state.value.push(action.payload)
        },
        deleteTodo: (state,action) => {
            state.value = state.value.filter((item) => { item.id != action.payload.id})
       }
    },
});

export const { addTodo, deleteTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
