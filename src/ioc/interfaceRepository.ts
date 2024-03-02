export interface TodoItemRepository {
  remove: (todo: Todo) => void; // 필요시 사용하는데 아직 사용하지 않음
  toggle: (todo: Todo) => void;
}

export interface TodoListRepository {
  gets: () => Todo[];
  currents: (visibleType: VisibleType) => Todo[];
  clearCompleted: () => void;
}

export interface TodoNewRepository {
  add: (name: string) => void;
}

export interface TodoRepository
  extends TodoListRepository,
    TodoItemRepository,
    TodoNewRepository {}

export const TodoRepositoryToken = Symbol("TodoRepository");

export interface Todo {
  id: string;
  name: string;
  completed: boolean;
}

export type VisibleType = "all" | "active" | "completed";
