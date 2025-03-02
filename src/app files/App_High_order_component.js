import './App.css'
import React, { useState } from 'react'


// we can also ma ke different file for each component or function


function App() {
    return (
        <div className='App'>
            <h1> High Order Component</h1>          <br /><br />
            <BlueHighOC cmp={Counter} />                <br /><br />
            <GreenHighOC cmp={Counter} />                <br /><br />
            <RedHighOC cmp={Counter} />

        </div>
    )
}


function BlueHighOC(props) {
    return (
        <div style={{ backgroundColor: 'blue', width: '250px' }}>
            <props.cmp />
        </div>
    )
}
function GreenHighOC(props) {
    return (
        <div style={{ backgroundColor: 'green', padding: '10px' }}>
            <props.cmp />
        </div>
    )
}
function RedHighOC(props) {
    return (
        <div style={{ backgroundColor: 'red', padding: '10px' }}>
            <props.cmp />
        </div>
    )
}


function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h3>Counter : {count}</h3>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default App