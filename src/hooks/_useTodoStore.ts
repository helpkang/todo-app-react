import { addTodo, setTodo } from "../store/todos-slice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { Todo } from "./useTodo";
import { useEffect } from "react";

export function _useTodoStore() {
  const todos = useSelector<RootState, Todo[]>((state) => state.todos);
  const dispatch = useDispatch();
  function saveTodoStore(todos: Todo[]) {
    dispatch(setTodo(todos));
  }
  function addTodoStore(todo: Todo) {
    dispatch(addTodo(todo));
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return { todos, saveTodoStore, addTodoStore };
}
