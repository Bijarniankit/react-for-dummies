import './App.css'
import React, { useState, useEffect } from 'react'

function App() {

    const [data, setdata] = useState("Rahul")
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.warn("useEffect count")

    },[count])
    useEffect(() => {
        console.warn("useEffect data")

    },[data])


    return (
        <div className="App">
            <h1>Hooks</h1>
            <h1>{data}</h1>
            <button onClick={() => { setdata("Godara ") }}>Click</button><br /><br />
            <button onClick={() => { setCount(count + 1) }}>Count :{count}</button>
        </div>

    )
}

export default App