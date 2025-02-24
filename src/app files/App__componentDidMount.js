import './App.css'
import React from 'react'

class App extends React.Component {
    constructor() {
        super()
        console.warn("constructor  ")
        this.state={
            name:"Rahul"    
        }
    }
    componentDidMount(){
        console.warn("componentDidMount")
    }

    render() {
        console.warn("render")  
        return (
            <div className="App" >
                <h1> Component did mount </h1>
                <button onClick={()=>{this.setState({name:"Raaaaaahul"})}}>Click</button>
            </div>
        )
    }
}

export default App
