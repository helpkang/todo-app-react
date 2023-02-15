import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todos } from "../assets/FakeData";

// export interface TodoState {
//     todos: { [id: number; name: string; completed: boolean] };
// }

// const theme = JSON.parse(localStorage.getItem('theme')) || [];

const initialState: string = 'dark';

const themeSlice = createSlice({
    name: "theme",
    initialState: {value: 'dark'},
    reducers: {
        toggleTheme: (state, action) => {
            state = action.payload;
        }
    },
});

export const { toggleTheme } =
    themeSlice.actions;

export default themeSlice.reducer;
