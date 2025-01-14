function Props(prop) {
    return (
        <div style={{ backgroundColor: "skyblue" }}>
            {/* <h1> Student component</h1> */}
            <h2> Name: {prop.name} </h2>
            <h2> Email: {prop.Email} </h2>
            <h4>  Address: {prop.other.address}</h4>
            
        </div>
    );

}

export default Props;   