import { useState } from "react";
import sinon from "ts-sinon";
import * as todoStore from "../../zustand/useTodoRepository";
import { Todo } from "../useTodoService";

export function initTodoStoreMock(initTodos: Todo[] = []) {
  // sinon.stub(todoStore, "useTodoRepository").callsFake(() => {
  //   const [todos, saveTodoStore] = useState<Todo[]>(initTodos);
  //   const [addError, setAddError] = useState("");
  //   function addTodo(todo: Todo) {
  //     saveTodoStore([...todos, todo]);
  //   }
  //   return { todos, saveTodo: saveTodoStore, addTodo, addError, setAddError };
  // });
}
