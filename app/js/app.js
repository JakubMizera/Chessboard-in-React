import React from "react";
import ReactDOM from "react-dom";
import "../scss/main.scss";

import Game from "./elements/game";


const App = () => {
    return (
        <Game/>
    )
}


ReactDOM.render(<App/>, document.querySelector("#page"));