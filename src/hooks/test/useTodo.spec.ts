import { renderHook, act } from "@testing-library/react";
import { Todo, VisibleType, useTodoService } from "../useTodoService";
import { initTodoStoreMock } from "./initTodoStoreMock";
import sinon from "ts-sinon";

describe("useTodo", () => {

    const todosMock: Todo[] = [
        { id: "1", name: "Todo 1", completed: false },
        { id: "2", name: "Todo 2", completed: true },
    ];
    const visibleTypeMock: VisibleType = "all";

    beforeEach(() => {
        initTodoStoreMock(todosMock);
    });

    afterEach(() => {
        sinon.restore();
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
