//import component
import TodoFilter from "../Components/organisms/TodoFilter";
import Navbar from "../Components/organisms/Navbar";
import TodoTable from "../Components/organisms/TodoTable";
import TodoDisplay from "../Components/organisms/TodoDisplay";

const TodoPage = () => {
    const TestData = {
        "Task": "testTask2",
        "DateCreated": "10/04/2024",
        "DueDate": "30/04/2024",
        "Description": "testDescription",
        "Subtasks": ["test1", "test2", "test3"]
    }

    return (
        <div>
            <TodoFilter/>
            <Navbar/>
            <TodoTable/>
            <TodoDisplay/>
        </div>
    )
}

export default TodoPage;