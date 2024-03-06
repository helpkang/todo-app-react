import "./TodoMain.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import React from "react";
import { ThemeContext } from "./ThemeContext";
import useTheme from "./hooks/useTheme";
import { useTodo } from "./hooks/useTodo";
import { NewTodoHook } from "./components/NewTodoHook";
import TodolistHook from "./components/TodoListHook";

const TodoMainHook: React.FC = () => {
  const { todos, remove, add, toggle, clearCompleted, currents } = useTodo();
  const theme = useTheme();
  return (
    <ThemeContext.Provider value={theme}>
      <div className="container" data-theme={theme}>
        <Header />
        <NewTodoHook add={add} />
        <TodolistHook
          todos={todos}
          remove={remove}
          toggle={toggle}
          clearCompleted={clearCompleted}
          currents={currents}
        />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default TodoMainHook;
