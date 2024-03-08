import { Box } from "@mui/material";
import React, { memo, useContext } from "react";
import useLocalStorage from "use-local-storage";
import { ThemeContext } from "../ThemeContext";

type NewTodoProps = {
  add: (name: string) => void;
};
export const NewTodoHook = memo(({add }: NewTodoProps) => {
  const [name, setName] = useLocalStorage<string>("name", "");
  const { theme } = useContext(ThemeContext);


  return (
    <Box className="new_todo" data-theme={theme}>
      <Box
        className="checkbox_container"
        sx={{
          width: "2.5rem",
          height: "2.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></Box>
      <input
        required
        value={name}
        type="text"
        placeholder="Create a new todo"
        onChange={(e) => setName(e.target.value)}
      />
      <Box>
        <button
          className="new_todo-btn"
          onClick={() => {
            add(name);
            setName("");
          }}
        >
          Add
        </button>
      </Box>
    </Box>
  );
});
