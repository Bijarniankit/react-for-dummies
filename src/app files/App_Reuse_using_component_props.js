import './App.css'
import React from 'react';
import Stu from '../components/Student_reuse_component';


function App() {

    const student = [
        {
            name: "Rahul", age: 25, email: "rahul@gmail.com"
        },
        {
            name: "Rohit", age: 26, email: "rohit@gmail.com"
        },
        {
            name: "Ravi", age: 24, email: "ravi@gmail.com"
        },
        {
            name: "Raj", age: 27, email: "raj@gmail.com"
        }
    ];
    return (
        <div className="App">
            <h1>Reuse Component</h1>
            {student.map((data,key) => (< Stu key={key} name={data.name} age={data.age} email={data.email} /> ) ) }
        </div>
    )
}

export default App  