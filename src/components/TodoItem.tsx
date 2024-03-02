import "./TodoList.css";
import { Box } from "@mui/material";
import IconCross from "../assets/iconCross.svg";
import {
  Todo,
  TodoItemRepository,
  TodoRepository,
} from "../ioc/interfaceRepository";

export type TodoItemProps = {
  todo: Todo;
  todoItemRepository: TodoItemRepository;
};

const TodoItem = ({ todo, todoItemRepository: todoRepository }: TodoItemProps) => {
  const { name, completed } = todo;

  return (
    <div className="todo_item">
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
          onClick={() => todoRepository.toggle(todo)}
          className={`${completed ? "checkbox-checked" : "checkbox"}`}
        ></button>
      </Box>
      <Box
        sx={{ flex: "1", padding: "10px" }}
        className={`${completed ? "todo--completed" : ""}`}
      >
        {name}
      </Box>
      <Box>
        <button
          className="todo_item--btn"
          onClick={() => todoRepository.removeTodo(todo)}
        >
          <img src={IconCross}></img>
        </button>
      </Box>
    </div>
  );
};

export default TodoItem;
