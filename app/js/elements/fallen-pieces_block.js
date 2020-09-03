import React from 'react';

import '../../scss/main.scss';
import Square from './square.js';

export default class FallenPiecesBlock extends React.Component {

    renderSquare(square, i) {
        return <Square
            key={i}
            keyVal={i}
            piece={square}
            style={square.style}
        />
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.props.whiteFallenPieces.map((el, index) => this.renderSquare(el, index))}
                </div>
                <div className="board-row">
                    {this.props.blackFallenPieces.map((el, index) => this.renderSquare(el, index))}
                </div>
            </div>
        );
    }
}