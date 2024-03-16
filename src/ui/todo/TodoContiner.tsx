import "./css/TodoMain.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useTodoService } from "./service/useTodoService";
import { NewTodoView } from "./view/NewTodoView";
import TodolistView from "./view/TodoListView";
import { useThemeService } from "../../hooks/service/useThemeService";
const TodoContainer = () => {
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
      <NewTodoView add={add} error={error} setError={setError} />
      <TodolistView
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

export default TodoContainer;
