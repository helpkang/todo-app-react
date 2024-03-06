import "./TodoList.css";
import { Box } from "@mui/material";
import IconCross from "../assets/iconCross.svg";
import {
  Todo,
} from "../ioc/interfaceRepository";

export type TodoItemProps = {
  todo: Todo;
  toggle: (todo: Todo)=>void;
  remove: (todo: Todo)=>void;
};

const TodoItemHook = ({ todo, toggle, remove }: TodoItemProps) => {
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
          onClick={() => toggle(todo)}
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
          onClick={() => remove(todo)}
        >
          <img src={IconCross}></img>
        </button>
      </Box>
    </div>
  );
};

export default TodoItemHook;
