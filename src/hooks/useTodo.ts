import { v4 as uuidv4 } from "uuid";
import { _useTodoStore } from "./_useTodoStore";

export type Todo ={
  id: string;
  name: string;
  completed: boolean;
}

export type VisibleType = "all" | "active" | "completed";

export function useTodo() {
  const { todos, saveTodoStore, addTodoStore } = _useTodoStore();

  function getFiltered(todo: Todo) {
    return todos.filter((item) => item.id !== todo.id);
  }

  function remove(todo: Todo) {
    const filtertodo = getFiltered(todo);
    saveTodoStore(filtertodo);
  }

  function add(name: string) {
    if (!name) {
      alert("You have to entere a name");
      return;
    }
    addTodoStore({ id: uuidv4(), name, completed: false });
  }

  function toggle(todo: Todo) {
    const updatedTodos = todos.map((item) => {
      if (item.id === todo.id) {
        const updatedItem = { ...item, completed: !item.completed };
        return updatedItem;
      }
      return item;
    });
    saveTodoStore(updatedTodos);
  }

  function clearCompleted() {
    const filteredTodos = todos.filter((item) => item.completed === false);
    saveTodoStore(filteredTodos);
  }

  function currents(visibleType: VisibleType) {
    if (visibleType == "active") {
      return todos.filter((item) => item.completed === false);
    }
    if (visibleType == "completed") {
      return todos.filter((item) => item.completed === true);
    }
    return todos;
  }

  return {
    todos,
    remove,
    add,
    toggle,
    clearCompleted,
    currents,
  };
}


