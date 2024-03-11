import "./TodoMain.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import React, { useEffect } from "react";
import { useTodoService } from "./hooks/useTodoService";
import { NewTodoHook } from "./components/NewTodoHook";
import TodolistHook from "./components/TodoListHook";
import { useThemeContextRepository } from "./zustand/useThemeContextRepository";
//Container component TodoConatiner
const TodoMainHook = () => {
  const {
    todos,
    remove,
    add,
    toggle,
    clearCompleted,
    currents,
    error,
    setError,
  } = useTodoService();
  const { theme } = useThemeContextRepository();
  useEffect(() => {}, [theme]);
  return (
    <div className="container" data-theme={theme}>
      <Header />
      <NewTodoHook add={add} error={error} setError={setError} />
      <TodolistHook
        todos={todos}
        remove={remove}
        toggle={toggle}
        clearCompleted={clearCompleted}
        currents={currents}
      />
      <Footer />
    </div>
  );
};

export default TodoMainHook;
