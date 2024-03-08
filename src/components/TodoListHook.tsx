import { Box } from "@mui/material";
import "./TodoList.css";

import { memo, useContext, useEffect, useMemo, useState } from "react";
import { ThemeContext } from "../ThemeContext";
import TodoItemHook from "./TodoItemHook";
import { Todo, VisibleType } from "../hooks/useTodo";

export interface TodoListProps {
  remove: (todo: Todo) => void;
  toggle: (todo: Todo) => void;
  clearCompleted: () => void;
  currents: (visibleType: VisibleType) => Todo[];
  todos: Todo[];
}
const TodolistHook = memo(
  ({ todos, remove, toggle, clearCompleted, currents }: TodoListProps) => {
    const { theme } = useContext(ThemeContext);
    const [visible, setVisible] = useState<VisibleType>("all");
    const filteredTodos = useMemo(() => currents(visible), [visible, todos]);

    return (
      <Box className="Card">
        <Box className="todo_list">
          {filteredTodos.map((todo) => (
            <TodoItemHook
              key={todo.id}
              todo={todo}
              toggle={toggle}
              remove={remove}
            />
          ))}
          <Box className="controls" data-theme={theme}>
            <Box>
              <span>{filteredTodos.length | 0} items left</span>
            </Box>
            <Box className="segregate" data-theme={theme}>
              <button
                className={`segregate-btn ${visible == "all" && "active"}`}
                id="all"
                onClick={() => setVisible("all")}
              >
                All
              </button>
              <button
                className={`segregate-btn ${visible == "active" && "active"}`}
                id="active"
                onClick={() => setVisible("active")}
              >
                Active
              </button>
              <button
                className={`segregate-btn ${
                  visible == "completed" && "active"
                }`}
                id="completed"
                onClick={() => setVisible("completed")}
              >
                Completed
              </button>
            </Box>
            <Box className="clear" data-theme={theme}>
              <button
                className="clear-btn"
                data-theme={theme}
                onClick={clearCompleted}
              >
                Clear Completed
              </button>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
);

export default TodolistHook;
