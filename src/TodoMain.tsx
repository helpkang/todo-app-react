import "./TodoMain.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Todolist from "./components/TodoList";
import React from "react";
import { useInjection } from "./ioc/injectionHooks";

import { NewTodo } from "./components/NewTodo";
import {
  TodoRepository,
  TodoRepositoryToken,
} from "./ioc/interfaceRepository";
import { ThemeContext } from "./ThemeContext";
import useTheme from "./ioc/impl/repository/useTheme";

const TodoMain: React.FC = () => {
  const todoRepository = useInjection<TodoRepository>(TodoRepositoryToken);
  const theme = useTheme();
  return (
    <ThemeContext.Provider value={theme}>
      <div className="container" data-theme={theme}>
        <Header />
        <NewTodo todoNewRepository={todoRepository} />
        <Todolist todoListRepository={todoRepository} todoItemRepository={todoRepository}/>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default TodoMain;
