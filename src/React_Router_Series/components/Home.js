import {Link} from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <p>This is the home page </p>
            <p>We are learning about the react router</p>
            <Link to="/about"> Go to About</Link>
        </div>
    )
}
export default Home