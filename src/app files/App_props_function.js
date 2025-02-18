import'./App.css'
import User from './components/User'
import Member from './components/Member.js'

function App() {

    function getData(){
        alert("hello from app")
    }

    return (
        <div className="App">
            <h1>Pass function as props</h1>
            <User data={getData}/>
            <Member data={getData}/>
        </div>
    );
}

export default App;