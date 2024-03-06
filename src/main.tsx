import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { InversifyProvider } from "./inversifyProvider";
import { container } from "./ioc/container";
import TodoMainHook from "./TodoMainHook";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <Provider store={store}>
      <InversifyProvider container={container}>
        <TodoMainHook />
      </InversifyProvider>
    </Provider>
);
