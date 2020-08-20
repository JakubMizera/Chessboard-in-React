import React from "react";
import ReactDOM from "react-dom";
import "../scss/main.scss";

import Board from "./elements/board";

const App = () => {
    return (
        <Board/>
    )
}


ReactDOM.render(<App/>, document.querySelector("#page"));