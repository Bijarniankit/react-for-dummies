import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');

    function savedata(e) {
        e.preventDefault();

        const formdata = {
            name: name,
            email: email,
            mobile: mobile,
        };
        console.warn('Form Data:', formdata);

       
        fetch('http://localhost:4000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formdata)
        })
            .then(response => response.json())
            .then(message => {console.log('Success:', message) })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    useEffect(() => {
        console.warn('Updated State:', { name, email, mobile });
    }, [name, email, mobile]);

    return (
        <div className='App'>
            <h1>API Post Method</h1>
            <form onSubmit={savedata}>
                <input type="text" name="name" placeholder="Enter Name" value={name} onChange={setName(e.target.value)} required />
                <input type="email" name="email" placeholder="Enter Email" value={email} onChange={setEmail(e.target.value)} required />
                <input type="tel" name="mobile" placeholder="Enter Contact" value={mobile} onChange={setMobile(e.target.value)} required /><br /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default App;
