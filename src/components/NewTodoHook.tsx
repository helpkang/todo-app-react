import { Box } from "@mui/material";
import React, { memo, useContext, useState } from "react";
import { ThemeContext } from "../ThemeContext";

type NewTodoProps = {
  add: (name: string) => void;
  addError: string;
  setAddError: (error: string) => void;
};
export const NewTodoHook = memo(({ add, addError, setAddError }: NewTodoProps) => {
  const [name, setName] = useState("");
  const { theme } = useContext(ThemeContext);

  function updateName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
    setAddError("");
  }

  function handleAdd() {
    add(name);
    setName("");
  }

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
        onChange={updateName}
      />
      <Box>
        <button
          className="new_todo-btn"
          onClick={handleAdd}
        >
          Add
        </button>
      </Box>
      {addError && <Box className="error">{addError}</Box>}
    </Box>
  );
});
