import './App.css'
import React, {useRef} from 'react'

function App() {    
    let inputRef = useRef(null)

    function showValue() {  
        let input01=inputRef.current.value
        let input02=document.getElementById('input2').value
        console.warn('input 1:',input01,'input 2:',input02)
    }

    return (
        <div className='App'>
            <h1>uncontrolled component</h1>
            <input type='text' ref={inputRef} />
            <input id="input2"/>
            <button onClick={showValue}>show value</button>       
        </div>
    )
}

export default App