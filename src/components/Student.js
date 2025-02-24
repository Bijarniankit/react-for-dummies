import React from 'react'

class Togglecomp extends React.Component{
    componentWillUnmount(){
        alert("componentWillUnmount called")
    }
    render(){
        return(
            <div>
                <h1>Toggle Component</h1>
            </div>
        )
    }

}

export default Togglecomp