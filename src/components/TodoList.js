import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/material";
import { deleteTodo, clearCompleted } from "../store/todos-slice";
import TodoItem from "./TodoItem";
import "./TodoList.css";
const Todolist = ({ colorTheme }) => {
    const [visibleTodos, setVisibleTodos] = useState("all");
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.value);
    const activeTodos = todos &&
        todos.filter((item) => {
            return item.completed == false;
        });
    const completedTodos = todos &&
        todos.filter((item) => {
            return item.completed == true;
        });
    console.log(colorTheme);
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    const currentTodos = visibleTodos == "all"
        ? todos
        : visibleTodos == "active"
            ? activeTodos
            : visibleTodos == "completed"
                ? completedTodos
                : todos;
    return (_jsx(Box, { className: "Card", children: _jsxs(Box, { className: "todo_list", children: [todos &&
                    currentTodos?.map((item, index) => (_jsx(TodoItem, { deleteHandler: () => dispatch(deleteTodo({ id: item.id })), index: index, id: item.id, completed: item.completed, name: item.name, colorTheme: colorTheme, currentTodos: currentTodos }, item.id))), _jsxs(Box, { className: "controls", "data-theme": colorTheme, children: [_jsx(Box, { children: _jsxs("span", { children: [currentTodos?.length | 0, " items left"] }) }), _jsxs(Box, { className: "segregate", "data-theme": colorTheme, children: [_jsx("button", { className: `segregate-btn ${visibleTodos == "all" && "active"}`, id: "all", onClick: () => setVisibleTodos("all"), children: "All" }), _jsx("button", { className: `segregate-btn ${visibleTodos == "active" && "active"}`, id: "active", onClick: () => setVisibleTodos("active"), children: "Active" }), _jsx("button", { className: `segregate-btn ${visibleTodos == "completed" && "active"}`, id: "completed", onClick: () => setVisibleTodos("completed"), children: "Completed" })] }), _jsx(Box, { className: "clear", "data-theme": colorTheme, children: _jsx("button", { className: "clear-btn", "data-theme": colorTheme, onClick: () => dispatch(clearCompleted({ todos })), children: "Clear Completed" }) })] })] }) }));
};
export default Todolist;
