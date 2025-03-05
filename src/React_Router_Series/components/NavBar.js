import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <ul className="navbar-ul">
            < li ><NavLink style={({ isActive }) => { return { color: isActive ? 'green' : 'pink' } }} className="nav-bar-link" to="/">Home</NavLink></li>
            < li ><NavLink style={({ isActive }) => { return { color: isActive ? 'green' : 'pink' } }} className="nav-bar-link" to="/about">About</NavLink></li>
            < li ><NavLink style={({ isActive }) => { return { color: isActive ? 'green' : 'pink' } }} className="nav-bar-link" to="/Lol">Lol</NavLink></li>
            < li ><NavLink style={({ isActive }) => { return { color: isActive ? 'green' : 'pink' } }} className="nav-bar-link" to="/filter">Filter</NavLink></li>
            < li ><NavLink style={({ isActive }) => { return { color: isActive ? 'green' : 'pink' } }} className="nav-bar-link" to="/ContactUs">Contact Us</NavLink></li>

        </ul>
    );
}

export default NavBar;
