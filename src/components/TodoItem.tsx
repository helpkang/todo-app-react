import React from "react";
import "./TodoList.css";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/material";
import IconCross from '../assets/iconCross.svg'
import { deleteTodo } from "../store/todos-slice";

const TodoItem = ({id, name, completed deleteHandler}) => {
const dispatch = useDispatch();

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
                <button className={`${completed ? 'checkbox checkbox-checked' : 'checkbox'}`}></button>
            </Box>
            <Box sx={{flex: '1', padding: '10px'}}>{name}</Box>
            <Box>
                <button className="todo_item--btn" onClick={deleteHandler}>
                  <img src={IconCross}></img>
                </button>
            
            </Box>
        </Box>
    );
};

export default TodoItem;
