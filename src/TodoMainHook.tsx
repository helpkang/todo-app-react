import "./TodoMain.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useTodoService } from "./hooks/useTodoService";
import { NewTodoHook } from "./components/NewTodoHook";
import TodolistHook from "./components/TodoListHook";
import { useThemeService } from "./service/useThemeService";
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
  
  const { theme } = useThemeService();
  useEffect(() => {
    console.log("theme change", theme);
    const bgLight: string = "hsl(0, 0%, 98%)";
    const bgDark: string = "hsl(235, 21%, 11%)";
    theme === "light"
      ? (document.body.style.backgroundColor = bgLight)
      : (document.body.style.backgroundColor = bgDark);
  }, [theme]);

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
