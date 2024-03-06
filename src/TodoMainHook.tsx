import "./TodoMain.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Todolist from "./components/TodoList";
import React from "react";
import { useInjection } from "./ioc/injectionHooks";

import { NewTodo } from "./components/NewTodo";
import {
  Todo,
  TodoRepository,
  TodoRepositoryToken,
} from "./ioc/interfaceRepository";
import { ThemeContext } from "./ThemeContext";
import useTheme from "./ioc/impl/repository/useTheme";
import { useTodo } from "./ioc/impl/repository/useTodo";
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
