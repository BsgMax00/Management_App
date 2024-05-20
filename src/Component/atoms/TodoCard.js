const TodoRow = (props) => {
    const Task = props.todoItem.data.Task;

    return (
        <div className="card" style={{height: 250}}>
            <div className="card-body">
                <div className="card-title">{Task}</div>
            </div>
        </div>
    )
}

export default TodoRow;