import React from 'react';

export default class Props extends React.Component {
    render(){
               return (
                <div>
                    <h1>Props in Class Component</h1>
                    <h2>Name:{this.props.name}</h2>
                    <h3>Email:{this.props.Email}</h3>
                    {/* <h2>{this.props.other.address}</h2> */}
                 </div>
                );
            }
}