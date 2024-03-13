import { v4 as uuidv4 } from "uuid";
import { useCallback } from "react";
import { useTodoRepository } from "../repository/useTodoStoreRepository";
import { useTodoErrorStoreRepository } from "../repository/useTodoErrorStoreRepository";
import { useTodoAdapter } from "../adapter/useTodoAdapter";
import { useProgressRepository } from "../repository/useProgressRepository";

export type Todo = {
  id: string;
  name: string;
  completed: boolean;
};

export type VisibleType = "all" | "active" | "completed";

export function useTodoService() {
  // const { todos, saveTodo, addTodo } = useTodoRepository();
  const { error, setError } = useTodoErrorStoreRepository();
  const todoAdapter = useTodoAdapter();
  const { progress, setProgress } = useProgressRepository();

  const todos = todoAdapter.getTodo.data || [];

  const add = useCallback((name: string) => {
    if (!name) {
      !error && setError("You have to entere a name");
      return;
    }
    const todo: Todo = { id: uuidv4(), name, completed: false };
    const result = todoAdapter.addTodo.mutate(todo);
    setProgress({
      isPending: todoAdapter.addTodo.isPending,
      error: todoAdapter.addTodo.error,
    });

  }, [todoAdapter.addTodo]);

  const remove = useCallback(
    (todo: Todo) => {
      const filtertodo = getRemoveTodos(todos, todo);
      todoAdapter.deleteTodo.mutate(todo.id);
      setProgress({
        isPending: todoAdapter.deleteTodo.isPending,
        error: todoAdapter.deleteTodo.error,
      });
    },
    [todos, todoAdapter.deleteTodo]
  );

  const toggle = useCallback(
    (todo: Todo) => {
      const updatedTodo = toggleCurrentComplete(todos, todo);
      if(!updatedTodo) return;
      const result = todoAdapter.updateTodo.mutate(updatedTodo);
      setProgress({
        isPending: todoAdapter.updateTodo.isPending,
        error: todoAdapter.updateTodo.error,
      });
    },
    [todos, todoAdapter.updateTodo]
  );

  const clearCompleted = useCallback(() => {
    const filteredTodos = getComplete(todos, true);
    const result = todoAdapter.setTodo.mutate(filteredTodos);
    setProgress({
      isPending: todoAdapter.setTodo.isPending,
      error: todoAdapter.setTodo.error,
    });
  }, [todos, todoAdapter.setTodo]);

  const currents = useCallback(
    (visibleType: VisibleType) => {
      if (visibleType == "active") {
        return getComplete(todos, true);
      }
      if (visibleType == "completed") {
        return getComplete(todos, false);
      }
      return todos;
    },
    [todos]
  );

  return {
    todos,
    remove,
    add,
    toggle,
    clearCompleted,
    currents,
    error,
    setError,
  };
}

function getComplete(todos: Todo[], completed: boolean) {
  return todos.filter((item) => item.completed === !completed);
}

function toggleCurrentComplete(todos: Todo[], todo: Todo): Todo | null{
  const updatedTodo =  todos.find((item) => {
    if (item.id === todo.id) return true;
    return false;
  })
  if(!updatedTodo) return null;
  return {...updatedTodo, completed: !updatedTodo.completed};
}

function getRemoveTodos(todos: Todo[], todo: Todo) {
  return todos.filter((item) => item.id !== todo.id);
}
