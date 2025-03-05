import { useParams } from "react-router-dom"

function User(){
    const params = useParams()
    const {name} = params;
    console.warn(params)
    return (
        <div>
            <h1>User Component</h1>
            <h3>Welcome {name}</h3> 

        </div>
    )
}

export default User