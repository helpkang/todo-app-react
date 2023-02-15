import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todos } from "../assets/FakeData";

// export interface TodoState {
//     todos: { [id: number; name: string; completed: boolean] };
// }

const initialState = Todos;

const TodoSlice = createSlice({
    name: "todo",
    initialState: { value: Todos },
    reducers: {
        addTodo: (state, action) => {
            state.value.push(action.payload);
        },
        deleteTodo: (state, action) => {
            state.value = state.value.filter(
                (item) => item.id != action.payload.id
            );
        },
        completeTodo: (state, action) => {
            state.value.map((item) => {
                if (item.id == action.payload.id) {
                    item.completed = !item.completed;
                }
            });
        },
        clearCompleted: (state, action) => {
            state.value = state.value.filter((item) => item.completed == false);
        },
    },
});

export const { addTodo, deleteTodo, completeTodo, clearCompleted } =
    TodoSlice.actions;

export default TodoSlice.reducer;
