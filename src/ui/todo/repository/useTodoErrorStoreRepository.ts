import { create } from "zustand";
import { devtools } from "zustand/middleware";

type TodoErrorState = {
  error: string;
  setError: (error: string) => void;
};

const name = "todoErrorRepository";
export const useTodoErrorStoreRepository = create(
  devtools<TodoErrorState>(
    (set) => ({
      error: "",
      setError: (error: string) =>
        set({ error }, false, { type: name + "/setError", payload: error }),
    }),
    {
      name: "zustant/todoErrorRepository",
      enabled: process.env.NODE_ENV === 'development',
    }
  )
);
