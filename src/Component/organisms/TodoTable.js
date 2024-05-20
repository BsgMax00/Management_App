//import the react components
import { useContext } from "react"

//import context
import { TodoContext } from "../../context/TodoContext"
import TodoRow from "../atoms/TodoCard"

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
            <div className="row">
                {todoList.map((todoItem) => (
                    <div key={todoList.indexOf(todoItem)} className="my-3 col-4">
                        <TodoRow todoItem={todoItem}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TodoTable;