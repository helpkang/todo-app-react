import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import TodoReducer from "../store/todos-slice";
import TodoItem from "./TodoItem";
import "./TodoList.css";
import { deleteTodo, clearCompleted } from "../store/todos-slice";
import { useState } from "react";

const Todolist = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.value);

    return (
        <Box className="Card">
            <Box className="todo_list">
                {todos.map(
                    (item: {
                        id: number;
                        name: string;
                        completed: boolean;
                    }) => (
                        <TodoItem
                            deleteHandler={() =>
                                dispatch(deleteTodo({ id: item.id }))
                            }
                            key={item.id}
                            id={item.id}
                            completed={item.completed}
                            name={item.name}
                        />
                    )
                )}

                <Box className="controls">
                    <Box>
                        <span>{todos.length} items left</span>
                    </Box>
                    <Box className="segregate">
                        <button className="segregate-btn active" id="all">
                            All
                        </button>
                        <button className="segregate-btn" id="active">
                            Active
                        </button>
                        <button className="segregate-btn" id="completed">
                            Completed
                        </button>
                    </Box>
                    <Box className="clear">
                        <button
                            className="clear-btn"
                            onClick={() => dispatch(clearCompleted({todos}))}
                        >
                            Clear Completed
                        </button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Todolist;
