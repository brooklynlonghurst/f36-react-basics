import React, { useState } from "react"

const Task = (props) => {
    const [complete, setComplete] = useState(false)

    const toggle = () => setComplete(!complete)

    const styles = {
        textDecoration: complete ? 'line-through': 'none',
        color: complete ? 'gray' : 'inherit'
    }

    return (
        <div className="card">
            <h3 onClick={toggle} style={styles}>{props.task}</h3>
        </div>
    )
}

export default Task