import React from 'react';
class User extends React.Component{
    constructor(){
        super();
        this.state={
            name:"Ankit"
        }
    }
    render()
    {
        console.warn("render method",this.state.name)
        return (
            <div>
                <h1>User component</h1>
                {/* when using state comment for prop */}
                {/* <h2>{this.state.name}</h2>       */}
                <button onClick={ () => this.setState({name:"Bijarnia"})}>Update name</button>
            </div>
        );
    }
} 

export default User;