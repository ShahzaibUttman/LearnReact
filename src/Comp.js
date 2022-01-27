import React, { Component } from "react";

class Comp extends Component {
    render() {
        
        const {name, status, savings} = this.props;
        
        return (
            <div>
                <div>{name}</div>
                <div>{status}</div>
                <div>{savings}</div>
            </div>
        );
    }
}

export default Comp;