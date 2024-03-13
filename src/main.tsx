import React from "react";
import ReactDOM from "react-dom/client";
import TodoMainHook from "./TodoMainHook";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
  <TodoMainHook />
  </QueryClientProvider>
);
