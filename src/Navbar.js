import React, { Component } from "react";
import './App.css';

class Navbar extends Component {
    render() {
        return ( 
            <div id="menu-outer">
                <div class="table">
                    <ul id="horizontal-list">
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default Navbar;