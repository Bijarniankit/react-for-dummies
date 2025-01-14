import './App.css';
import React,{useState} from 'react';


function App() {
  
  const [data, setData]=useState("Start Typing");
  const [print, setPrint]=useState(false);

  function getData(value) {
    console.warn(value.target.value);
    setData(value.target.value);
    setPrint(false);
  }

  return (
    <div className="App">
      <h1>React App</h1>
      { print ? <h3>{data}</h3> :null}
      <input type="text" placeholder="Enter your name" onChange={getData} />
      <button onClick={()=>{setPrint(true)}} > Print </button>
    </div>
  );
}


export default App;
