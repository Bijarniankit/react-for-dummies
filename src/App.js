import './App.css';
import React from 'react';
// import User1 from './User1';
// import User from './User';
// import Userr from './Userr';
// import Props from './Props_functional';
import Props from './Props_class';

/*Props class component  PROPS_CLASS */
class App extends React.Component {
    constructor(){
      super();
      this.state={
      name:"Ankit"
      }}
   render() {
      return(
        <div className='App'>
        <h1>Props in React App</h1>
        <Props name={"Ankit" }  Email={"Rj@gmail.com"}/>
        <Props name={this.state.name }  Email={"Rj@gmail.com"}/>
        <button onClick={()=>this.setState({name:"sanjay"})}>Update</button>
        <button onClick={()=>this.setState({name:"Ankit"})}>Update 2</button>
        </div>
      );
    }
}

export default App;
