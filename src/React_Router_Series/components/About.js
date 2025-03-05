import {Link} from 'react-router-dom'

function About() {
    return (
        <div>
            <h1>About Page</h1>
            <p>This is the About page </p>
            <p>We are learning about the react router</p>
            <Link to="/"> Go to Home</Link>
            <li> <Link to="/user/anil">anil</Link> </li>
            <li><Link to="/user/peter">Peter</Link><br/></li>
        </div>
    )
}
export default About