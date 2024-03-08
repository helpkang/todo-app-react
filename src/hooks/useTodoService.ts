import { v4 as uuidv4 } from "uuid";
import { useTodoRepository } from "./useTodoRepository";
import { useCallback } from "react";

export type Todo = {
  id: string;
  name: string;
  completed: boolean;
};

export type VisibleType = "all" | "active" | "completed";

export function useTodoService() {
  const { todos, saveTodo, addTodo, addError, setAddError } = useTodoRepository();

  const add = useCallback((name: string) => {
    if (!name) {
      setAddError("You have to entere a name");
      return;
    }
    addTodo({ id: uuidv4(), name, completed: false });
  }, []);

  const remove = useCallback(
    (todo: Todo) => {
      const filtertodo = getRemoveTodos(todos, todo);
      saveTodo(filtertodo);
    },
    [todos]
  );

  const toggle = useCallback(
    (todo: Todo) => {
      const updatedTodos = toggleCurrentComplete(todos, todo);
      saveTodo(updatedTodos);
    },
    [todos]
  );

  const clearCompleted = useCallback(() => {
    const filteredTodos = getComplete(todos, true);
    saveTodo(filteredTodos);
  }, [todos]);

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
    addError,
    setAddError,
  };
}

function getComplete(todos: Todo[], completed: boolean) {
  return todos.filter((item) => item.completed === !completed);
}

function toggleCurrentComplete(todos: Todo[], todo: Todo) {
  return todos.map((item) => {
    if (item.id === todo.id) {
      const updatedItem = { ...item, completed: !item.completed };
      return updatedItem;
    }
    return item;
  });
}

function getRemoveTodos(todos: Todo[], todo: Todo) {
  return todos.filter((item) => item.id !== todo.id);
}
