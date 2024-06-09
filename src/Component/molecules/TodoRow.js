const TodoRow = (props) => {
    const Task = props.todoItem.data.Task;

    return (
        <p className="">{Task}</p>
    )
}

export default TodoRow;