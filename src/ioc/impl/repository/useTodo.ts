import { injectable } from "inversify";
import { Todo } from "../../interfaceRepository";
import { TodoRepository } from "../../interfaceRepository";
import { addTodo, setTodo } from "../../../store/todos-slice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/store";
import { v4 as uuidv4 } from "uuid";
import { VisibleType } from "../../interfaceRepository";

export function useTodo() {
  const todos = useSelector<RootState, Todo[]>((state) => state.todos);
  const dispatch = useDispatch();

  function getFiltered(todo: Todo){
    return todos.filter((item) => item.id !== todo.id);
  }
  function saveTodoStore(todos: Todo[]){
    dispatch(setTodo(todos));
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
    dispatch(addTodo({ id: uuidv4(), name, completed: false }));
  }

  function toggle(todo: Todo) {
    const updatedTodos = todos.map((item) => {
      if (item.id === todo.id) {
        const updatedItem = { ...item, completed: !item.completed };
        return updatedItem;
      }
      return item;
    });
    dispatch(setTodo(updatedTodos));
  }

  function clearCompleted() {
    const filteredTodos = todos.filter((item) => item.completed === false);
    dispatch(setTodo(filteredTodos));
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
