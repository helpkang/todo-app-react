import { useState } from "react";
import sinon from "ts-sinon";
import * as todoStore from "../_useTodoStore";
import { Todo } from "../useTodo";

export function initTodoStoreMock(initTodos: Todo[] = []) {
  sinon.stub(todoStore, "_useTodoStore").callsFake(() => {
    const [todos, saveTodoStore] = useState<Todo[]>(initTodos);
    function addTodoStore(todo: Todo) {
      saveTodoStore([...todos, todo]);
    }
    return { todos, saveTodoStore, addTodoStore };
  });
}
