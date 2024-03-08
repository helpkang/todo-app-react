import { v4 as uuidv4 } from "uuid";
import { _useTodoStore } from "./_useTodoStore";
import { useCallback } from "react";

export type Todo = {
  id: string;
  name: string;
  completed: boolean;
};

export type VisibleType = "all" | "active" | "completed";

export function useTodo() {
  const { todos, saveTodoStore, addTodoStore } = _useTodoStore();


  const remove = useCallback((todo: Todo) => {
    const filtertodo = getFiltered(todos,todo);
    saveTodoStore(filtertodo);
  }, [todos]);

  const add = useCallback((name: string) => {
    if (!name) {
      alert("You have to entere a name");
      return;
    }
    addTodoStore({ id: uuidv4(), name, completed: false });
  }, []);

  const toggle = useCallback((todo: Todo) => {
    const updatedTodos = todos.map((item) => {
      if (item.id === todo.id) {
        const updatedItem = { ...item, completed: !item.completed };
        return updatedItem;
      }
      return item;
    });
    saveTodoStore(updatedTodos);
  },[todos]);

  const clearCompleted = useCallback(()=> {
    const filteredTodos = todos.filter((item) => item.completed === false);
    saveTodoStore(filteredTodos);
  },[todos]);

  const currents = useCallback((visibleType: VisibleType) => {
    if (visibleType == "active") {
      return todos.filter((item) => item.completed === false);
    }
    if (visibleType == "completed") {
      return todos.filter((item) => item.completed === true);
    }
    return todos;
  }, [todos]);

  return {
    todos,
    remove,
    add,
    toggle,
    clearCompleted,
    currents,
  };
}


function getFiltered(todos: Todo[], todo: Todo) {
  return todos.filter((item) => item.id !== todo.id);
}
