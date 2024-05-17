//import for react components
import { useEffect, useState, createContext } from "react"
import { collection, getDocs } from "firebase/firestore"

//import service for database
import database from "../util/FirebaseConfiguration"

export const TodoContext = createContext()

const TodoProvider = (props) => {
    const [isLoading, setLoading] = useState(true);
    const [todoList, setTodoList] = useState([]);

    const fetchData = async() => {
        await getDocs(collection(database, "TodoCollection"))
            .then((QuerySnapshot) => {
                const newData = QuerySnapshot.docs.map((Item) => ({id: Item.id, data: Item.data()}));
                setTodoList(newData);
            })
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <TodoContext.Provider value={{ todoList: todoList, loading: isLoading }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;