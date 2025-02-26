import './App.css'
import React, { useState } from 'react'
import User from './components/User_lifecycle'

function App() {

    const [data, setData] = useState(1)
    const [count, setCount] = useState(10)

    return (
        <div className="App" >
            <h1> Hooks useEffect </h1>
            <User data={data} count={count} />
            <button onClick={() => { setData(data + 1) }}>Update Data</button>
            <button onClick={() => { setCount(count + 1) }}>Update Count</button>
        </div>
    )
}

export default App