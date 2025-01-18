import React from "react";

function User(props) {
    

    return (
    <div>
        <h2>User component</h2>
        <button onClick={()=>{props.data()}}> Call data function</button>

    </div>
    );
}

export default User;