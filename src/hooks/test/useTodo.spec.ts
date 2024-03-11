import { renderHook, act } from "@testing-library/react";
import { Todo, VisibleType, useTodoService } from "../useTodoService";
import { initTodoStoreMock } from "./initTodoStoreMock";
import sinon from "ts-sinon";

describe("useTodo", () => {
  const visibleTypeMock: VisibleType = "all";

  beforeEach(() => {
    const { result } = renderHook(() => useTodoService());
    act(() => {
      result.current.add("Todo 1");
    });
    act(() => {
      result.current.add("Todo 2");
    });
    act(() => {
      result.current.toggle(result.current.todos[1]);
    });
  });

  afterEach(() => {
    const { result } = renderHook(() => useTodoService());
    act(() => {
      result.current.clearCompleted();
    });
    const currentTodos = [...result.current.todos];
    currentTodos.forEach((todo) => {
      act(() => {
        result.current.toggle(todo);
      });
    });
    act(() => {
      result.current.clearCompleted();
    });
  });

  it("should add a new todo", () => {
    const { result } = renderHook(() => useTodoService());
    act(() => {
      result.current.add("New Todo");
    });
    expect(result.current.todos).toHaveLength(3);
    expect(result.current.todos[2].name).toBe("New Todo");
  });
  it("should remove clear", () => {
    const { result } = renderHook(() => useTodoService());
    act(() => {
      result.current.clearCompleted();
    });
    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].name).toBe("Todo 1");
  });
});
