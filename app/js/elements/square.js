import React from "react";


function Square(props) {
    return (
        <button
            key={props.i}
            className={`square + ${props.shade}`}
            onClick={props.onClick}
            style={props.style}>
        </button>
    );
}
export default Square;