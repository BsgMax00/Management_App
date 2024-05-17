//import the react components
import { useContext } from "react"

//import context
import { TodoContext } from "../../context/TodoContext"

const TodoTable = () => {
    const {todoList, loading} = useContext(TodoContext)

    if (loading) {
        return (
            <div className="col-6 border">
                <p>page is still loading</p>
            </div>
        )
    }
    
    return (
        <div className="col-6 border">
            <ul>
                {todoList.map((todoItem) => (
                    <li key={todoList.indexOf(todoItem)}>{todoList.indexOf(todoItem)}: {todoItem.data.Task}</li>
                ))}
            </ul>
        </div>
    )
}

export default TodoTable;