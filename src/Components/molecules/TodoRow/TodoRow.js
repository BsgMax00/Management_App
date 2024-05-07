const TodoRow = (props) => {
    const Task = props.data.Task;
    const DateCreated = props.data.DateCreated;
    const DueDate = props.data.DueDate;

    console.log(props.data)


    return (
        <div className="container-fluid">
            <div className="rounded-4 border border-dark mx-5">
                <div className="px-4">
                    <div className="row">
                        <div className="col-lg-4">{Task}</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-lg-4">Date created: {DateCreated}</div>
                        <div className="col-sm-12 col-lg-8">Due date: {DueDate}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoRow;