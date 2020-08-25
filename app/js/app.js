import React from "react";
import ReactDOM from "react-dom";
import "../scss/main.scss";

import Board from "./elements/board";
import BoardV2 from "./elements/boardV2";

const App = () => {
    return (
        <BoardV2/>
    )
}


ReactDOM.render(<App/>, document.querySelector("#page"));