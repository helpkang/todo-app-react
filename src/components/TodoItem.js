import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./TodoList.css";
import { useDispatch } from "react-redux";
import { Box } from "@mui/material";
import IconCross from "../assets/iconCross.svg";
import { completeTodo } from "../store/todos-slice";
const TodoItem = ({ id, name, deleteHandler, currentTodos, index, completed, colorTheme, }) => {
    // const [completed, setCompleted] = useState(false);
    const dispatch = useDispatch();
    // const todos = useSelector((state) => state.todos.value);
    function completedHandler() {
        completed = !completed;
        dispatch(completeTodo({ id: id, completed: completed }));
    }
    return (_jsxs("div", { className: "todo_item", children: [_jsx(Box, { className: "checkbox_container", sx: {
                    width: "3rem",
                    height: "3rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }, children: _jsx("button", { onClick: completedHandler, className: `${completed ? "checkbox-checked" : "checkbox"}` }) }), _jsx(Box, { sx: { flex: "1", padding: "10px" }, className: `${completed ? "todo--completed" : ""}`, children: name }), _jsx(Box, { children: _jsx("button", { className: "todo_item--btn", onClick: deleteHandler, children: _jsx("img", { src: IconCross }) }) })] }));
};
export default TodoItem;
