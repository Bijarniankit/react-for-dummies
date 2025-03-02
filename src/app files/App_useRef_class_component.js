import './App.css'
import React, { useState , createRef } from 'react'


class App extends React.Component {
    constructor(){
        super();
        this.inputRef = createRef();
    }

    getVali(){
        console.log(this.inputRef.current.value)
        this.inputRef.current.style.color="red"
    }

    render() {
        return (
            <div className="App" >
                <h1>REf in React  </h1>
                <input type="text" ref={this.inputRef} />
                <button onClick={()=>this.getVali()}>Get Value</button> 
                
            </div>
        )
    }
}

export default App