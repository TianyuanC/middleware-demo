import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";

const counter = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
};

const store = createStore(counter);

const render = () =>
    ReactDOM.render(
        <App
            value={store.getState()}
            onIncrement={() => store.dispatch({ type: "INCREMENT" })}
            onDecrement={() => store.dispatch({ type: "DECREMENT" })}
        />,
        document.getElementById("root")
    );

render();
store.subscribe(render);
