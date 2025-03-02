import './App.css'
import React, {useState} from 'react'

function App() {    
    const [item,setItem] = useState("Controlled") 
    return (
        <div className='App'>
            <h1> Controlled Components </h1>
            < input type="text"  defaultValue="Controlled" onChange={(e)=>setItem(e.target.value)}/>
            <input type="text" value={item} />  {/* here we cannot change the value of input as we set it as same as item. it will only show item's value */}
            <h4>InputBox Value: {item}</h4>
            
        </div>
    )
}

export default App