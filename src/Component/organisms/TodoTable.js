//import the react components
import { useContext } from "react"

//import context
import { TodoContext } from "../../context/TodoContext"
import TodoRow from "../molecules/TodoRow"

const TodoTable = () => {
    const {todoList, loading, setCurrentTodoItemId} = useContext(TodoContext)

    if (loading) {
        return (
            <div className="col-6 border">
                <p>page is still loading</p>
            </div>
        )
    }
    
    return (
        <div className="col-6 border">
            <div className="row">
                {todoList.map((todoItem) => (
                    <div key={todoItem.id} className="col-12">
                        <a onClick={() => setCurrentTodoItemId(todoItem.id)}>
                            <TodoRow todoItem={todoItem}/>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TodoTable;