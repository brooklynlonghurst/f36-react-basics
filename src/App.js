import {useState} from "react"
import React from "react"
import Form from "./components/Form"
import List from "./components/List"


function App() {
  const [taskList, setTaskList] = useState([])
  
 
  
  const addTask = (newTask) => setTaskList([...taskList, newTask])
  
  return (
    <div className="App">
      <h1>App: </h1>
      <Form addTask={addTask}/>
      <List />
    </div>
  );
}

export default App;
