import { injectable } from "inversify";
import { Todo } from "../../interfaceRepository";
import { TodoRepository } from "../../interfaceRepository";
import { addTodo, setTodo } from "../../../store/todos-slice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/store";
import { v4 as uuidv4 } from "uuid";
import { VisibleType } from "../../interfaceRepository";

@injectable()
export class TodoRepositoryImpl implements TodoRepository {
  dispatch: any;
  private _todos: Todo[];
  constructor() {
    console.log("TODO");
    this._todos = useSelector<RootState, Todo[]>((state) => state.todos);
    this.dispatch = useDispatch();
  }

  remove = (todo: Todo) => {
    const todos = this._todos.filter((item) => item.id != todo.id);
    this.dispatch(setTodo(todos));
  };

  add = (name: string) => {
    if (!name) {
      alert("You have to entere a name");
      return;
    }
    this.dispatch(addTodo({ id: uuidv4(), name, completed: false }));
  };

  removeTodo = (todo: Todo) => {
    const filteredTodos = this._todos.filter((item) => item.id != todo.id);
    this.dispatch(setTodo(filteredTodos));
  };

  toggle = (todo: Todo) => {
    const updatedTodos = this._todos.map((item) => {
      if (item.id === todo.id) {
        const updatedItem = { ...item, completed: !item.completed };
        return updatedItem;
      }
      return item;
    });
    this.dispatch(setTodo(updatedTodos));
  };

  gets = () => this._todos;

  clearCompleted = () => {
    const filteredTodos = this._todos.filter((item) => item.completed == false);
    this.dispatch(setTodo(filteredTodos));
  };
  
  currents = (visibleType: VisibleType) => {
    if (visibleType == "active") {
      return this.gets().filter((item) => item.completed == false);
    }
    if (visibleType == "completed") {
      return this.gets().filter((item) => item.completed == true);
    }
    return this.gets();
  };
  
}
