import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box } from "@mui/material";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Todolist from "./components/TodoList";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todos-slice";
import { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
const App = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [colorTheme, setColorTheme] = useLocalStorage("theme" ? "dark" : "light", 'dark');
    // const switchTheme = () => {
    //     const newTheme = colorTheme === "dark" ? "light" : "dark";
    //     setColorTheme(newTheme);
    // };
    const addTodoHandler = () => {
        if (!name) {
            alert("You have to entere a name");
            return;
        }
        dispatch(addTodo({ id: Math.random() * 1000, name, completed: false }));
        setName("");
    };
    useEffect(() => {
        let bgLight = "hsl(0, 0%, 98%)";
        let bgDark = "hsl(235, 21%, 11%)";
        colorTheme == 'light' ? document.body.style.backgroundColor = bgLight
            : document.body.style.backgroundColor = bgDark;
    }, [colorTheme]);
    return (_jsxs("div", { className: "container", "data-theme": colorTheme, children: [_jsx(Header, { colorTheme: colorTheme, setColorTheme: setColorTheme }), _jsxs(Box, { className: "new_todo", "data-theme": colorTheme, children: [_jsx(Box, { className: "checkbox_container", sx: {
                            width: "2.5rem",
                            height: "2.5rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        } }), _jsx("input", { required: true, value: name, type: "text", placeholder: "Create a new todo", onChange: (e) => setName(e.target.value) }), _jsx(Box, { children: _jsx("button", { className: "new_todo-btn", onClick: addTodoHandler, children: "Add" }) })] }), _jsx(Todolist, { colorTheme: colorTheme }), _jsx(Footer, {})] }));
};
export default App;
