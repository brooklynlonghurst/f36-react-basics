import React from "react"
import Task from "./Task"

const List = (props) => {

    let taskDisplay = props.taskList.map((task, index) => {
        return <Task task={task}/>
    })

    return (
        <div className="col-container">
            <h2>My Tasks</h2>
            {taskDisplay}
        </div>
    )
}

export default List