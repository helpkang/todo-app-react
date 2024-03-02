import React, { ReactNode } from "react";
import { Container } from "inversify";
import { useStore } from "react-redux";
import { AnyAction, Store } from "@reduxjs/toolkit";

export const InversifyContext = React.createContext<{
  container: Container | null;
}>({ container: null });

type Props = {
  children: ReactNode;
  container: Container;
};

export const InversifyProvider: React.FC<Props> = ({ container, children }) => {
  const store = useStore();
  type RootState = ReturnType<typeof store.getState>;

  container
    .bind<Store<RootState, AnyAction>>("ReduxStore")
    .toConstantValue(store);

  return (
    <InversifyContext.Provider value={{ container: container }}>
      {children}
    </InversifyContext.Provider>
  );
};
