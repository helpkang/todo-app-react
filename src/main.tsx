import React from "react";
import ReactDOM from "react-dom/client";
import TodoContainer from "./ui/todo/TodoContiner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FormValdationTest } from "./form/FormValdationTest";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <TodoContainer /> */}
      <FormValdationTest />
    </QueryClientProvider>
  </React.StrictMode>
);
