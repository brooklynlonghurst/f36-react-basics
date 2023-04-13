import {useState} from "react"
import React from "react"
import './App.css';
// import Bravo from './components/Bravo'
import Delta from "./components/Delta"


function App() {
  
  const [userInput, setUserInput] = useState("")
  const [name, setName] = useState("")
  
  
  const handleChange = (e) => {
    setUserInput(e.target.value)
    setName(userInput)
  }
  
  const handleClick = () => {
    setName(userInput)
    setUserInput("")
  }
  
  return (
    <div className="App">
      <h1>App: {name}</h1>
      <Delta changeName={handleChange}/>
      {/* <Bravo personName={name}/> */}
    </div>
  );
}

export default App;
