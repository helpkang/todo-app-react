import { Box } from "@mui/material";
import React, { memo, useState } from "react";
import { useThemeService } from "../../../hooks/service/useThemeService";

type NewTodoViewProp = {
  add: (name: string) => void;
  error: string;
  setError: (error: string) => void;
};
export const NewTodoView = memo(({ add, error, setError }: NewTodoViewProp) => {
  const [name, setName] = useState("");
  const { theme } = useThemeService();

  function updateName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
    error && setError("");
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
        name="todo"
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
      {error && <Box className="error">{error}</Box>}
    </Box>
  );
});
