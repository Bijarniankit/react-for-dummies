import './App.css';
import React , { useState , useMemo } from 'react';

function App() {

    const [count, setCount] = useState(0);
    const [items, setItems] = useState(10);
    
// useMemo takes one function as argument and one state on which you want to run that function as argument

    const yolo=useMemo(function mutliplyItems() {
        console.log('Multiplying items ...');
        return count * 10;
    },[count]);


    return (
        <div className="App">
            <h1>useMemo hook </h1>
            <h2>Count: {count}</h2>
            <h2>Items: {items}</h2>
            <h2>Mutliply Items: {yolo}</h2>
            <button onClick={() => setCount(count + 1)}>count</button>
            <button onClick={() => setItems(items*10)}>Items</button>
            
        </div>
    );
}

export default App;