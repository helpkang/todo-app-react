import { Container } from "inversify";
import "reflect-metadata";
;
import { TodoRepositoryImpl } from "./impl/repository/TodoRepositoryImpl";

import
  {
    TodoRepository,
    TodoRepositoryToken
  } from "./interfaceRepository";

const container = new Container();
container.bind<TodoRepository>(TodoRepositoryToken).to(TodoRepositoryImpl);

export { container };
