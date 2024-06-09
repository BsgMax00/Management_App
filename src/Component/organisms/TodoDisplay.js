//import the react components
import { useContext } from "react"

//import context
import { TodoContext } from "../../context/TodoContext"

//import component
import TodoDetail from "./TodoDetail";
import TodoSubTasks from "./TodoSubTasks";

const TodoDisplay = () => {
    const { todolist, currentTodoItemId } = useContext(TodoContext)
    

    if (currentTodoItemId == null) {
        return (
            <div className="col-4 border">
                <p>no Todo task selected</p>
            </div>
        )
    }

    return (
        <div className="col-4 border">
            <p>{currentTodoItemId}</p>
            <TodoDetail/>
            <TodoSubTasks/>
        </div>
    )
}

export default TodoDisplay;