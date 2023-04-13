import React, { useState } from "react"

const Form = (props) => {
    const [userInput, setUserInput] = useState("")

    const handleSumbit = (event) => {
        event.preventDefault()
        props.addTask(userInput)
        setUserInput("")
    }

    const handleChange = (event) => setUserInput(event.target.value)

    return (
        <form className="card" onSubmit={handleSumbit}>
            <input type="text" value={userInput} onChange={handleChange}/>
            <button type="submit">Add Task</button>
        </form>
    )
}

export default Form