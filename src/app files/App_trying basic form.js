import './App.css'
import React,{useState} from 'react';

function App() {
  const [name,setName] = useState("");
  const [tnc,setTnc] = useState(false);
  const [interest,setInterest] = useState("");


  function getFormData(e)
    {
      e.preventDefault()
      // console.log(`Name: ${name}`)
      // console.log(`tnc: ${tnc}`)
      // console.log(`interest: ${interest}`)
      console.log(name,tnc,interest)
      console.warn(name,tnc,interest)
    }
    return (
    <div className="App">
        <h1>Handle form in react</h1>
        <form onSubmit={getFormData}>
          <input type="text" placeholder="Enter your name" onChange={(e)=>{setName(e.target.value)}}/> <br/><br/>
          <select onChange={(e)=>{setInterest(e.target.value)}}>
            <option>Select Options</option>
            <option>React</option>
            <option>Angular</option>
            <option value="Rawat">Vue</option>
          </select>
          <br/><br/>
          <input type="checkbox" onChange={(e)=>{setTnc(e.target.checked)}} /> <span> Accept Terms and conditions </span>
          <br/><br/>
          <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default App