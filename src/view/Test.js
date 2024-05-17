//import the react components to fix routing
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"

//import service for database
import database from "../util/FirebaseConfiguration"

const Test = () => {
    const [testing, setTesting] = useState(undefined);
    const [testingList, setTestingList] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [todoList, setTodoList] = useState([]);

    const fetchData = async() => {
        await getDocs(collection(database, "TodoCollection"))
            .then((QuerySnapshot) => {
                const newData = QuerySnapshot.docs.map((Item) => ({id: Item.id, data: Item.data()}));
                setTodoList(newData)
            })
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [])

    if (isLoading) {
        return (
            <div>
                <p>page is still loading</p>
            </div>
        )
    }

    return (
        <div>
            <p>Test 2</p>
            <div>
                <form>
                    <input onChange={(e) => {setTesting(e.target.value)}}/>
                    <button onClick={() => {if (testing !== "") setTestingList([...testingList, testing]); setTesting("");}}>Test addition</button>
                    <button onClick={() => {console.log(todoList)}}>Check if array exists</button>
                </form>
                <ul>
                    {todoList.map((m) => (
                        <li key={todoList.indexOf(m)}>{todoList.indexOf(m)}: {m.data.Task}</li>
                    ))}
                </ul>
                <p>-------------------------------------------------</p>
                <ul>
                    {testingList.map((m) => (
                        <li key={testingList.indexOf(m)}>{m}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Test;