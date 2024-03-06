import { renderHook, act } from "@testing-library/react";
import { Todo, VisibleType, useTodo } from "../useTodo";
import { initTodoStoreMock } from "./initTodoStoreMock";

describe("useTodo", () => {

    const todosMock: Todo[] = [
        { id: "1", name: "Todo 1", completed: false },
        { id: "2", name: "Todo 2", completed: true },
    ];
    const visibleTypeMock: VisibleType = "all";

    beforeAll(() => {
        initTodoStoreMock(todosMock);
    });

    it("should add a new todo", () => {
        const { result } = renderHook(() => useTodo());

        act(() => {
            result.current.add("New Todo");
        });

        expect(result.current.todos).toHaveLength(3);
    });

 
});
