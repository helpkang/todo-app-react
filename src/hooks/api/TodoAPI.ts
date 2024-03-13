export type TodoAPIModel = {
  id: string;
  name: string;
  completed: boolean;
};

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export class TodoAPI {
  static gTodo: TodoAPIModel[] = [];

  public static async getTodos(): Promise<TodoAPIModel[]> {
    await sleep(1000);
    return TodoAPI.gTodo;
  }

  public static async addTodo(todo: TodoAPIModel): Promise<void> {
    await sleep(200);
    TodoAPI.gTodo =[...TodoAPI.gTodo, todo];
  }

  public static async deleteTodo(todoId: string): Promise<void> {
    await sleep(300);
    TodoAPI.gTodo = TodoAPI.gTodo.filter((todo) => todo.id !== todoId);
    return;
  }

  public static async updateTodo(todo: TodoAPIModel): Promise<void> {
    await sleep(400);
    const index = TodoAPI.gTodo.findIndex((t) => t.id === todo.id);
    if (index !== -1) {
      TodoAPI.gTodo[index] = {...todo};
      TodoAPI.gTodo = [...TodoAPI.gTodo];
    }

    console.log('todoapi', TodoAPI.gTodo);
  }

  public static async setTodo(todos: TodoAPIModel[]): Promise<void> {
    await sleep(2000);
    TodoAPI.gTodo = [...todos];
  }
}
