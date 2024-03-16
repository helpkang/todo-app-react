import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";

export type TodoRModel = {
  id: string;
  name: string;
  completed: boolean;
};

export type TodoState = {
  todos: TodoRModel[];
  addTodo: (todo: TodoRModel) => void;
  saveTodo: (todos: TodoRModel[]) => void;
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
      
      enabled:  process.env.NODE_ENV === 'development',
    }
  )
);
