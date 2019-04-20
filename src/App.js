import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>{this.props.value}</p>
                    <a
                        href="#increment"
                        onClick={this.props.onIncrement}
                        className="App-link"
                    >
                        Increment
                    </a>
                    <a
                        href="#decrement"
                        onClick={this.props.onDecrement}
                        className="App-link"
                    >
                        Decrement
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
