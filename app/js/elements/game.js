import React from 'react';

import '../../scss/main.scss';
import Board from './board.js';
import FallenSoldierBlock from "./fallen-soldiers_block";
import setUpBoard from "../helpers/boardSetUp";

export default class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            squares: setUpBoard(),
            whiteFallenSoldiers: [],
            blackFallenSoldiers: [],
            player: 1,
            sourceSelection: -1,
            status: '',
            turn: 'white'
        }
    }

    handleClick(i) {
        const squares = this.state.squares.slice();

        if (this.state.sourceSelection === -1) {
            if (!squares[i] || squares[i].player !== this.state.player) {
                this.setState({status: "Wrong selection. Choose player " + this.state.player + " pieces."});
                squares[i] ? delete squares[i].style.backgroundColor : null;
            } else {
                squares[i].style = {...squares[i].style, backgroundColor: "RGB(111,143,114)"};
                this.setState({
                    status: "Choose destination for the selected piece",
                    sourceSelection: i
                });
            }
        } else if (this.state.sourceSelection > -1) {
            //delete squares[this.state.sourceSelection].style.backgroundColor; zmienić na klasy
            console.log(squares[this.state.sourceSelection]);
            if (squares[i] && squares[i].player === this.state.player) {
                this.setState({
                    status: "Wrong selection. Choose valid source and destination again.",
                    sourceSelection: -1,
                });
            } else {

                const squares = this.state.squares.slice();
                const whiteFallenSoldiers = this.state.whiteFallenSoldiers.slice();
                const blackFallenSoldiers = this.state.blackFallenSoldiers.slice();
                const isDestEnemyOccupied = squares[i] ? true : false;
                const isMovePossible = squares[this.state.sourceSelection].isMovePossible(this.state.sourceSelection, i, isDestEnemyOccupied);
                const srcToDestPath = squares[this.state.sourceSelection].getSrcToDestPath(this.state.sourceSelection, i);
                const isMoveLegal = this.isMoveLegal(srcToDestPath);
                //const isQueeningPossible = squares[this.state.sourceSelection].isQueeningPossible(this.state.sourceSelection, i, isDestEnemyOccupied);

                if (isMovePossible && isMoveLegal) {
                    if (squares[i] !== null) {
                        if (squares[i].player === 1) {
                            whiteFallenSoldiers.push(squares[i]);
                        } else {
                            blackFallenSoldiers.push(squares[i]);
                        }
                    }
                    console.log("whiteFallenSoldiers", whiteFallenSoldiers);
                    console.log("blackFallenSoldiers", blackFallenSoldiers);
                    squares[i] = squares[this.state.sourceSelection];
                    squares[this.state.sourceSelection] = null;
                    let player = this.state.player === 1 ? 2 : 1;
                    let turn = this.state.turn === 'white' ? 'black' : 'white';
                    this.setState({
                        sourceSelection: -1,
                        squares: squares,
                        whiteFallenSoldiers: whiteFallenSoldiers,
                        blackFallenSoldiers: blackFallenSoldiers,
                        player: player,
                        status: '',
                        turn: turn
                    });
                } else {
                    this.setState({
                        status: "Wrong selection. Choose valid source and destination again.",
                        sourceSelection: -1,
                    });
                }
            }
        }

    }


    isMoveLegal(srcToDestPath) {
        let isLegal = true;
        for (let i = 0; i < srcToDestPath.length; i++) {
            if (this.state.squares[srcToDestPath[i]] !== null) {
                isLegal = false;
            }
        }
        return isLegal;
    }

    render() {

        return (
            <div className="board">
                <div className="game">
                    <div className="game-board">
                        <Board
                            squares={this.state.squares}
                            onClick={(i) => this.handleClick(i)}
                        />
                    </div>
                    <div className="game-info">
                        <h3>{this.state.turn} turn to move</h3>
                        <div className="game-status">{this.state.status}</div>

                        <div className="fallen-soldier-block">

                            {<FallenSoldierBlock
                                whiteFallenSoldiers={this.state.whiteFallenSoldiers}
                                blackFallenSoldiers={this.state.blackFallenSoldiers}
                            />
                            }
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}