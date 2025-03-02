import './App.css'
import React from 'react'
import User from './components/User_2'

function App(){
    const [data , setData] = React.useState(" yo")

    // in this way i can get data from child component to parent component and use it in the parent file

    function parentAlert(roast){
        setData(roast); 
        alert(roast);
    }

    return (
        <div className="App">
        <h1>Lifting State Up</h1>
        <h1>Name :{data}</h1>
        <User alert={parentAlert}/>
        </div>
    )
}

export default App