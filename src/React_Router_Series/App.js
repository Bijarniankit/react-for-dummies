import './App.css'
import React, { } from 'react'
import Home from './React_Router_Series/components/Home'
import About from './React_Router_Series/components/About'
import NavBar from './React_Router_Series/components/NavBar'
import Page404 from './React_Router_Series/components/Page404'
import User from './React_Router_Series/components/User'
import Filter from './React_Router_Series/components/Filter'
import ContactUs from './React_Router_Series/components/ContactUs'
import Dummy1 from './React_Router_Series/components/Dummy1'
import Dummy2 from './React_Router_Series/components/Dummy2'
import Dummy3 from './React_Router_Series/components/Dummy3'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/*" element={<Page404 />} />
                    <Route path ="/Lol" element={<Navigate to="/" />} />  {/*navigate is use to navigate to a specific page*/}
                    <Route path="/User/:name" element={< User />} />
                    <Route path="/filter" element={< Filter />} />
                    <Route path="/contactUs/" element={< ContactUs />} >
                        <Route path="/dummy1" element={< Dummy1 />} />
                        <Route path="dummy2" element={< Dummy2 />} />
                        <Route path="dummy3" element={< Dummy3 />} />
                        </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}




export default App