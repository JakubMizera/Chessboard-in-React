import React from 'react';

import '../../scss/main.scss';
import Board from './board.js';
import FallenPiecesBlock from "./fallen-pieces_block";
import setUpBoard from "../helpers/boardSetUp";
import Queen from "../pieces/queen";
import Pawn from "../pieces/pawn";
import King from "../pieces/king";


export default class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            squares: setUpBoard(),
            whiteFallenPieces: [],
            blackFallenPieces: [],
            player: 1,
            sourceSelection: -1,
            status: '',
            turn: 'white'
        }
    }

    handleClick(i) {
        const squares = [...this.state.squares];

        if (this.state.sourceSelection === -1) {
            if (!squares[i] || squares[i].player !== this.state.player) {
                this.setState({status: "Please choose player " + this.state.turn + " pieces"});
                squares[i].style = {...squares[i].style, backgroundColor: " "};


            } else {
                this.setState({
                    status: "Choose destination for the selected piece",
                    sourceSelection: i
                });
                squares[i].style = {...squares[i].style, backgroundColor: "rgb(55,83,67)"};
            }
        } else if (this.state.sourceSelection > -1) {
            squares[this.state.sourceSelection].style = {
                ...squares[this.state.sourceSelection].style,
                backgroundColor: ""
            };
            if (squares[i] && squares[i].player === this.state.player) {
                this.setState({
                    status: "You can't capture your own pieces",
                    sourceSelection: -1,
                });
            } else {

                const squares = [...this.state.squares];
                const whiteFallenPieces = [...this.state.whiteFallenPieces];
                const blackFallenPieces = [...this.state.blackFallenPieces];
                const isDestEnemyOccupied = !!squares[i];//empty square = false else true
                const isMovePossible = squares[this.state.sourceSelection].isMovePossible(this.state.sourceSelection, i, isDestEnemyOccupied);//checks if move is within rules
                const srcToDestPath = squares[this.state.sourceSelection].getSrcToDestPath(this.state.sourceSelection, i);
                const isMoveLegal = this.isMoveLegal(srcToDestPath);


                if (isMovePossible && isMoveLegal) {
                    if (squares[i] !== null) {
                        if (squares[i].player === 1) {
                            whiteFallenPieces.push(squares[i]);
                        } else {
                            blackFallenPieces.push(squares[i]);
                        }
                    }

                    const queening = this.checkQueening(squares, i);
                    //const castling = this.checkCastling(this.state.sourceSelection, i, squares);

                    squares[i] = queening === null ? squares[this.state.sourceSelection] : queening;
                    //squares[i] = castling === null ? squares[this.state.sourceSelection] : castling;
                    squares[this.state.sourceSelection] = null;//emptying square after capture
                    let player = this.state.player === 1 ? 2 : 1;//switching players turn
                    let turn = this.state.turn === 'white' ? 'black' : 'white';//wywalic niepotrzebne zmienna turn

                    this.setState({
                        sourceSelection: -1,
                        squares: squares,
                        whiteFallenPieces: whiteFallenPieces,
                        blackFallenPieces: blackFallenPieces,
                        player: player,
                        status: '',
                        turn: turn
                    });
                } else {
                    this.setState({
                        status: "Illegal move, please choose different square",
                        sourceSelection: -1,
                    });
                }

            }
        }

    }
    //checks path of piece
    isMoveLegal(srcToDestPath) {
        let isLegal = true;
        for (let i = 0; i < srcToDestPath.length; i++) {
            if (this.state.squares[srcToDestPath[i]] !== null) {
                isLegal = false;
            }
        }
        return isLegal;
    }
    //checks if pawn is clicked and renders new queen
    checkQueening(squares, i) {
        if (squares[this.state.sourceSelection] instanceof Pawn) {
            const isQueeningPossible = squares[this.state.sourceSelection].isQueeningPossible(i);
            if (isQueeningPossible) {
                return new Queen(this.state.player);
            }
        }
        return null;
    }

    // checkCastling(src, dest, squares) {
    //     if (squares[this.state.sourceSelection] instanceof King) {
    //         const isCastlingPossible = squares[this.state.sourceSelection].isCastlingPossible(src, dest);
    //         if (isCastlingPossible) {
    //             return squares[61] = new Rook(this.state.player);
    //         }
    //     }
    //     return null;
    // }


    render() {

        return (
            <>

                <div className="board">
                    <div className="game-info">
                        <h3>{this.state.turn} turn to move</h3>
                        <div className="game-status">{this.state.status}</div>
                    </div>
                    <div className="game">
                        <div className="game-board">
                            <Board
                                squares={this.state.squares}
                                onClick={(i) => this.handleClick(i)}
                            />
                        </div>
                        <div className="numbers">
                            <span>8</span>
                            <span>7</span>
                            <span>6</span>
                            <span>5</span>
                            <span>4</span>
                            <span>3</span>
                            <span>2</span>
                            <span>1</span>
                        </div>
                        <div className="letters">
                            <span>a</span>
                            <span>b</span>
                            <span>c</span>
                            <span>d</span>
                            <span>e</span>
                            <span>f</span>
                            <span>g</span>
                            <span>h</span>
                        </div>
                    </div>
                    <div className="fallen-soldier-block">

                        {<FallenPiecesBlock
                            whiteFallenPieces={this.state.whiteFallenPieces}
                            blackFallenPieces={this.state.blackFallenPieces}
                        />
                        }
                    </div>
                </div>
            </>
        );
    }
}