import './App.css'
import React,{useRef} from 'react'
import User from './components/User3'

function App() {
    const inputRef = useRef(null)
    function handleClick(){
        inputRef.current.style.color="red"
    }
    return (
        <div className='App'>
            <h1>forwardRef in React.js</h1>
            <User  ref={inputRef}/>
            <button onClick={handleClick}>update input box</button>
        </div>
    )
}


export default App
