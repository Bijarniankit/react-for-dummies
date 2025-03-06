import './App.css'
import React, { useEffect, useState } from 'react'


function App() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/data')
            .then((response) => response.json())
            .then((resp) => {
                setData(resp)
                console.warn(resp)
            })
            .catch((error) => console.error("Error fetching data:", error))
    }, [])

    return (
        <div className='App'>
            <h1>    Set API calls  </h1>

            <table style={{ border: "4px solid black", borderCollapse:"collapse" , width: "100%" }}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) =>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.mobile}</td>
                            </tr>
                        )}
                </tbody>

            </table>
        </div>
    )
}




export default App