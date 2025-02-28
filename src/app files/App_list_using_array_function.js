import './App.css';
import React from 'react';
import {Table} from 'react-bootstrap'

function App() {
    const student = [
        {
            name: "Rahul",
            age: 25,
            email: "rahul@gmail.com"
        },
        {
            name: "Rohit",
            age: 26,
            email: "rohit@gmail.com"
        },
        {
            name: "Ravi",
            age: 24,
            email: "ravi@gmail.com"
        },
        {
            name: "Raj",
            age: 27,
            email: "raj@gmail.com"
        }
    ];

    return (
        <div className="App">
            <h1>Student Details</h1>
            <Table  striped variant="dark">     
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Email</td>
                </tr>
                </thead>
                <tbody>
                {
                    student.map((data, index) => (
                        <tr key={index}>
                            <td>{data.name}</td>
                            <td>{data.age}</td>
                            <td>{data.email}</td>
                        </tr>
                    ))}
                 </tbody>   

            </Table>
        </div>
    );
}

export default App;