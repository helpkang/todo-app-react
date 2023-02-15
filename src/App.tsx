import { createTheme, ThemeProvider, Box, useTheme } from "@mui/material";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Todolist from "./components/TodoList";
import { theme, shades } from "./Theme";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todos-slice";
import { useState } from "react";

function App() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const addTodoHandler = () => {
        if (!name) {
            alert("You have to entere a name");
            return
        }
        dispatch(addTodo({ id: Math.random() * 1000, name, completed: false }));
        setName("");
    };

    return (
        <div className="containter">
            <ThemeProvider theme={theme}>
                <Header />
                <Box className="new_todo">
                    <Box
                        className="checkbox_container"
                        sx={{
                            width: "2.5rem",
                            height: "2.5rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        {/* <button className="checkbox checkbox-checked" onClick={checkBoxHandler}></button> */}
                    </Box>
                    <input
                        required
                        value={name}
                        type="text"
                        placeholder="Create a new todo"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Box>
                        <button
                            className="new_todo-btn"
                            onClick={addTodoHandler}
                        >
                            Add
                        </button>
                    </Box>
                </Box>
                <Todolist />
                <div className="reorder">Drag and drop to reorder list</div>
                <Footer />
            </ThemeProvider>
        </div>
    );
}

export default App;
