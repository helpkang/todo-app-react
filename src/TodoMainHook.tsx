import "./TodoMain.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useTodoService } from "./hooks/service/useTodoService";
import { NewTodoHook } from "./components/NewTodoHook";
import TodolistHook from "./components/TodoListHook";
import { useThemeService } from "./hooks/service/useThemeService";
import { useEffect } from "react";
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

  const { theme } = useThemeService(true);


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
