import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { logger, crashReporter } from "./middlewares";

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

const IncAction = () => ({
    type: "INCREMENT"
});
const action = IncAction();

// #2
// const dispatchAndLog = (store, action) => {
//     console.log("dispatching v2", action);
//     store.dispatch(action);
//     console.log("next state", store.getState());
// };

// #3
// const next = store.dispatch;
// store.dispatch = action => {
//     console.log("dispatching v3", action);
//     let result = next(action);
//     console.log("next state", store.getState());
//     return result;
// };

// #5
// const applyMiddleware = (store, middlewares) => {
//     middlewares = middlewares.slice();
//     middlewares.reverse();

//     middlewares.forEach(middleware => (store.dispatch = middleware(store)));
// };

// #6
// const applyMiddleware = (store, middlewares) => {
//     middlewares = middlewares.slice();
//     middlewares.reverse();
//     let dispatch = store.dispatch;
//     middlewares.forEach(middleware => (dispatch = middleware(store)(dispatch)));
//     return Object.assign({}, store, { dispatch });
// };

let store = createStore(counter, applyMiddleware(logger, crashReporter));
// #6
//store = applyMiddleware(store, [logger, crashReporter]);

const render = () =>
    ReactDOM.render(
        <App
            value={store.getState()}
            onIncrement={() => {
                // #1
                // console.log("dispatching v1", action);
                // store.dispatch(action);
                // console.log("next state", store.getState());

                // #2
                // dispatchAndLog(store, action);

                store.dispatch(action);
            }}
            onDecrement={() => store.dispatch({ type: "DECREMENT" })}
        />,
        document.getElementById("root")
    );

render();
store.subscribe(render);
