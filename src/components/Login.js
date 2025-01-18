import React,{useState} from "react";

function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userError, setUserError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    function loginHandle(e){
        e.preventDefault();      
        console.log( username, password)
    }

    function userHandler(e){
        let item = e.target.value.length;
        if(item === 0 || item < 3){
            setUserError(true)
        }
        else{ 
            setUserError(false)
        };
        if (!userError){
            setUsername(e.target.value)
        }    
    }

    function passwordHandler(e){
        let item = e.target.value.length;
        if(item === 0 || item  < 3) { setPasswordError(true)}
        else { setPasswordError(false) };
         
        if (!passwordError){
            setPassword(e.target.value)
        }   
    }   


    return(
        <div>
        <h1>Login</h1>
        <form onSubmit={loginHandle}>
        <input type="text" placeholder="Username" onChange={userHandler}/> { userError ? <span>Username invalid</span> : null}
        <br/><br/>
        <input type="text" placeholder="Password" onChange={passwordHandler} /> { passwordError ? <span>Password invalid</span> : null}
         <br/><br/>
        <button type="submit">Login</button>
        </form>
        </div>
    );
}

export default Login;