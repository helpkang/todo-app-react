import React, { useState } from "react";
import "./TodoList.css";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/material";
import IconCross from "../assets/iconCross.svg";
import { completeTodo } from "../store/todos-slice";

const TodoItem = ({ id, name, deleteHandler, completed }) => {
    // const [completed, setCompleted] = useState(false);
    const dispatch = useDispatch();
    // const todos = useSelector((state) => state.todos.value);

    function completedHandler() {
        completed = !completed;
        dispatch(completeTodo({ id: id, completed: completed }));
    }

    return (
        <Box className="todo_item">
            <Box
                className="checkbox_container"
                sx={{
                    width: "3rem",
                    height: "3rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <button
                    onClick={completedHandler}
                    className={`${completed ? "checkbox-checked" : "checkbox"}`}
                ></button>
            </Box>
            <Box
                sx={{ flex: "1", padding: "10px" }}
                className={`${completed ? 'todo--completed' : ''}`}
            >{name}</Box>
            <Box>
                <button className="todo_item--btn" onClick={deleteHandler}>
                    <img src={IconCross}></img>
                </button>
            </Box>
        </Box>
    );
};

export default TodoItem;
