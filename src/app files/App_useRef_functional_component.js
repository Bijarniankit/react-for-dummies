import './App.css'
import React, { useRef } from 'react'

function App() {
    const inputref = useRef(null)

    function handleref() {
        console.warn("Using useRef Hook")
        inputref.current.style.backgroundColor = "black"
        inputref.current.style.color = "white"
        inputref.current.focus() // this function selects the input box like a cursor
        inputref.current.value = "70" // this function sets the value of the input box to 50
        inputref.current.style.display = "block" // this function unhides the input box
    }

    function handleref1() {
        // console.warn("Using useRef Hook 1")
        inputref.current.style.backgroundColor = "red"
        inputref.current.style.color = "white"
        inputref.current.focus() // this function selects the input box like a cursor
        inputref.current.value = "50" // this function sets the value of the input box to 50
        inputref.current.style.display = "block" // this function unhides the input box
    }

    function show() {
        inputref.current.style.display = "block" // this function unhides the input box
    }

    function hide() {
        inputref.current.style.display = "none" // this function unhides the input box
    }



    return (
        <div className="App">
            <h1>Ref in React  </h1>
            <div className='container'>
                <input ref={inputref} type="text" placeholder="Type here..." className="input" /><br /><br />
            </div>

            <button onClick={handleref}>Click Me1</button>
            <button onClick={handleref1}>Click Me1</button> <br /><br />

            <button onClick={show}>Show</button>
            <button onClick={hide}>Hide</button>
        </div>
    )
}

export default App