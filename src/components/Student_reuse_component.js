function User(props) {
    return (
        <div>
            <span>Hello, {props.name}</span>
            <span>Your age is {props.age}</span>
            <span>Your email is {props.email}</span>
        </div>
    )
}

export default User;