import React from "react";

function User(props) {
    

    return (
    <div>
        <h2>Member component</h2>
        <button onClick={()=>{props.data()}}> Call data function in member</button>

    </div>
    );
}

export default User;