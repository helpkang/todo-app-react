import "../css/TodoList.css";
import { Box } from "@mui/material";
import IconCross from "../../../assets/iconCross.svg";
import { Todo } from "../service/useTodoService";
import { memo } from "react";
export type TodoItemViewProps = {
  todo: Todo;
  toggle: (todo: Todo)=>void;
  remove: (todo: Todo)=>void;
};

const TodoItemView = memo(({ todo, toggle, remove }: TodoItemViewProps) => {
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
});

export default TodoItemView;
