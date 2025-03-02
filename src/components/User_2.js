function User(props){
    const data="John Doe"
    return(
        <div>
            <h2>User component</h2>
            <button onClick={()=>props.alert(data)}>click me</button>
        </div>
    )
}
export default User