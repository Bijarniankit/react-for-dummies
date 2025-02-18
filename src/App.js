import './App.css';
import React from 'react';
import User from './components/User_render';

// class App extends React.Component{
//     constructor(){
//         super();
//         this.state={
//         data:"Yolo"
//         }
//        }

//     render(){
//         return (
//             <div className="App">
//                 <h1>Life cycle method by using class</h1>
//                 <h2>{this.state.data}</h2>
//             </div>
//         );
//     }
// }

function App() {
    // const[name,setname]=React.useState("Ankit"); 
    return (
        <div className="App">
            <h1>Render method in react</h1>
            {/* <User name={name}/> */}

            <User />

            {/* <button onClick={()=>setname("Bijarnia")} > Update name </button> */}


        </div>
    );

}




export default App;