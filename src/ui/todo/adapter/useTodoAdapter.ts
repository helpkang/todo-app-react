import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { TodoAPI, TodoAPIModel } from "../../../hooks/api/TodoAPI";

export function useTodoAdapter() {
  const queryClient = useQueryClient();
  const getTodo = useQuery({
    queryKey: ["todos"],
    queryFn: TodoAPI.getTodos,
  });

  const addTodo = useMutation({
    mutationFn: (todo: TodoAPIModel) => TodoAPI.addTodo(todo),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  const deleteTodo = useMutation({
    mutationFn: (deleteTodoId: string) => TodoAPI.deleteTodo(deleteTodoId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  const updateTodo = useMutation({
    mutationFn: (todo: TodoAPIModel) => {
      return TodoAPI.updateTodo(todo)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  const setTodo = useMutation({
    mutationFn: (todos: TodoAPIModel[]) => TodoAPI.setTodo(todos),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
  return { getTodo, addTodo, deleteTodo, updateTodo, setTodo };
}
