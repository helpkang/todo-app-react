import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { InversifyProvider } from "./inversifyProvider";
import { container } from "./ioc/container";
import TodoMain from "./TodoMain";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <Provider store={store}>
      <InversifyProvider container={container}>
        <TodoMain />
      </InversifyProvider>
    </Provider>
);
