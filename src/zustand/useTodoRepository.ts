import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";

import { Todo } from "../hooks/useTodoService";

type TodoState = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  saveTodo: (todos: Todo[]) => void;
};
export const useTodoRepository = create(
  devtools(
    persist<TodoState>(
      (set) => ({
        todos: [],
        addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
        saveTodo: (todos) => set(() => ({ todos })),
      }),
      {
        name: "todoRepository",
        storage: createJSONStorage(() => localStorage),
      }
    ),
    {
      name: "zustand/todoRepository",
      enabled: true,
    }
  )
);
