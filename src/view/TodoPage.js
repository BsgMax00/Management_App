//import component
import TodoFilter from "../Component/organisms/TodoFilter";
import Navbar from "../Component/organisms/Navbar";
import TodoTable from "../Component/organisms/TodoTable";
import TodoDisplay from "../Component/organisms/TodoDisplay";
import TodoProvider from "../context/TodoContext";

const TodoPage = () => {
    return (
        <div className="container-fluid vh-100">
            <Navbar/>
            <div className="row h-100">
                <TodoProvider>
                    <TodoFilter/>
                    <TodoTable/>
                    <TodoDisplay/>
                </TodoProvider>
            </div>
        </div>
    )
}

export default TodoPage;