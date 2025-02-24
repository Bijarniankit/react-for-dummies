import './App.css'
import React from 'react'
import Student from '../components/Student'

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            count: 0,
            show: true
        }
        console.warn("constructor")
    }
    componentDidMount() {
        console.warn("componentDidMount")
    }

    shouldComponentUpdate() {
        console.warn("shouldComponentUpdate", this.state.count)
        if (this.state.count < 4)  // component will update only if count is less than 4 
            return true
        else
            return false
    }

    componentDidUpdate(preProps, preState, snapshot) {
        console.warn("componeeeeeeentDidUpdate")
    }

    render() {
        console.warn("render")
        return (
            <div className="App">
                <h1>Component did Update</h1>
                <h2>Counter:{this.state.count}</h2>
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Update Counter</button>
                <button onClick={() => { this.setState({ count: this.state.count - 1 }) }}>Lower Counter</button>

                {
                    this.state.show ? <Student /> : <h1>Component Unmount</h1>
                }
                <button onClick={() => { this.setState({ show: !this.state.show }) }} > Toggle button</button>

            </div>

        )
    }
}

export default App