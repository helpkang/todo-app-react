import { Box } from "@mui/material";
import TodoItem from "./TodoItem";
import "./TodoList.css";
import {
  Todo,
  TodoItemRepository,
  TodoListRepository,
  VisibleType,
} from "../ioc/interfaceRepository";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../ThemeContext";

export interface TodoListProps {
  todoListRepository: TodoListRepository 
  todoItemRepository: TodoItemRepository;
}
const Todolist = ({ todoListRepository, todoItemRepository }: TodoListProps) => {
  const { theme } = useContext(ThemeContext);
  const todos = todoListRepository.gets();
  const [visible, setVisible] = useState<VisibleType>("all");
  const filteredTodos = getFiltered(todoListRepository, visible);

  setupEffect(todos);

  return (
    <Box className="Card">
      <Box className="todo_list">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            todoItemRepository={todoItemRepository}
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
              className={`segregate-btn ${visible == "completed" && "active"}`}
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
              onClick={() => todoListRepository.clearCompleted()}
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
function getRepository(
  todoRepository: TodoListRepository & TodoItemRepository
) {
  const todoListRepository: TodoListRepository = todoRepository;
  const todoItemRepository: TodoItemRepository = todoRepository;
  return { todoListRepository, todoItemRepository };
}

function getFiltered(
  todoListRepository: TodoListRepository,
  visible: VisibleType
) {
  return todoListRepository.currents(visible);
}

function setupEffect(todos: Todo[]) {
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
}
