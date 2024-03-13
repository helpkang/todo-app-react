import { renderHook, act, waitFor } from "@testing-library/react";
import { VisibleType, useTodoService } from "../service/useTodoService";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("useTodo", () => {
  const visibleTypeMock: VisibleType = "all";

  const queryClient = new QueryClient();
  const createWrapper =
    () =>
    ({ children }: { children: any }) =>
      (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      );

  const getUseTodoService = () =>
    renderHook(
      () => {
        return useTodoService();
      },
      { wrapper: createWrapper() }
    );

  beforeEach(async () => {
    const { result } = getUseTodoService();
    await act(async () => {
      await result.current.add("Todo 1");
    });
    await act(async () => {
      await result.current.add("Todo 2");
    });
    await act(async () => {
      await result.current.toggle(result.current.todos[1]);
    });
  });

  afterEach(async () => {
    const { result } = getUseTodoService();
    await act(async () => result.current.clearCompleted());
    const currentTodos = [...result.current.todos];
    await act(async () =>
      currentTodos.forEach(async (todo) => result.current.toggle(todo))
    );
    await act(async () =>
      currentTodos.forEach(async (todo) => result.current.toggle(todo))
    );

    await act(async () => {
      await result.current.clearCompleted();
    });
  });

  it("should add a new todo", async () => {
    const { result } = getUseTodoService();

    await act(async () => {
      await result.current.add("New Todo");
    });
    await waitFor(() => expect(result.current.todos).toHaveLength(3), {
      timeout: 10000,
    });
    await waitFor(() => expect(result.current.todos[2].name).toBe("New Todo"), {
      timeout: 10000,
    });
  });

  // it("should remove clear", () => {
  //   const { result } = getUseTodoService();
  //   act(() => {
  //     result.current.clearCompleted();
  //   });
  //   expect(result.current.todos).toHaveLength(1);
  //   expect(result.current.todos[0].name).toBe("Todo 1");
  // });
});
