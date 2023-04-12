import {useState} from "react"
import React from "react"
import './App.css';
// import Bravo from './components/Bravo'


function App() {
  
  const [userInput, setUserInput] = useState("")
  const [name, setName] = useState("")
  
  
  const handleChange = (e) => {
    setUserInput(e.target.value)
  }
  
  const handleClick = () => {
    setName(userInput)
    setUserInput("")
  }
  
  return (
    <div className="App">
      <h1>App: {name}</h1>
      <input placeholder="What's your name?" value={userInput} onChange={handleChange} />
      <button onClick={handleClick}>Change name</button>
    </div>
  );
}

export default App;
