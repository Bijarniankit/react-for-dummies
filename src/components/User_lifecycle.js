import React, { useEffect } from 'react'

function User(props) {
    useEffect(() => {
        console.warn("useEffect data wale")
    }, [props.data])
    
    useEffect(() => {
        console.warn("useEffect count wale")
    }, [props.count])
    return (
        <div>
            <h1> User Component </h1>
            <h2> {props.data} </h2>
            <h2> {props.count} </h2>
        </div>
    )
}

export default User