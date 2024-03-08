import * as todoStore from "../store/todos-slice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { Todo } from "./useTodoService";
import { useEffect, useState } from "react";

export function useTodoRepository() {
  const [addError, setAddError] = useState("");

  const todos = useSelector<RootState, Todo[]>((state) => state.todos);
  const dispatch = useDispatch();
  function saveTodo(todos: Todo[]) {
    dispatch(todoStore.setTodo(todos));
  }
  function addTodo(todo: Todo) {
    dispatch(todoStore.addTodo(todo));
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return { todos, saveTodo, addTodo, addError, setAddError };
}
