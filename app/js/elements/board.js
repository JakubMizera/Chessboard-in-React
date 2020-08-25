import React from 'react';
import {useEffect, useState} from 'react';


const Board = () => {
    const positionArray = [];
    const boardSize = 8;

    for (let i = 0; i < boardSize; i++) {
        positionArray[i] = [];

        for (let j = 0; j < boardSize; j++) {
            positionArray[i][j] = {row: i, col: j};
        }
    }

    positionArray[0][0].piece = "rook";
    positionArray[0][1].piece = "knight";
    positionArray[0][1].player= "black";



    const refreshBoard = () => {

    }

    const handleMove = (e) => {
        let dataset = e.currentTarget.dataset;
        console.log(positionArray[dataset.row][dataset.col]);
        refreshBoard();
    }

    const kingBlack = <img src='../../images/king-black.svg'/>


    return (
        <>
            <div className='board'>
                <div className='row'>
                    <div className='col white' data-row='0' data-col='0' onClick={handleMove.bind(this)}>8</div>
                    <div className='col black' data-row='0' data-col='1' onClick={handleMove.bind(this)}></div>
                    <div className='col white' data-row='0' data-col='2' onClick={handleMove.bind(this)}></div>
                    <div className='col black' data-row='0' data-col='3' onClick={handleMove.bind(this)}></div>
                    <div className='col white' data-row='0' data-col='4' onClick={handleMove.bind(this)}>{kingBlack}</div>
                    <div className='col black' data-row='0' data-col='5' onClick={handleMove.bind(this)}></div>
                    <div className='col white' data-row='0' data-col='6' onClick={handleMove.bind(this)}></div>
                    <div className='col black' data-row='0' data-col='7' onClick={handleMove.bind(this)}></div>
                </div>
                <div className='row'>
                    <div className='col black' data-row='1' data-col='0' onClick={handleMove.bind(this)}>7</div>
                    <div className='col white' data-row='1' data-col='1' onClick={handleMove.bind(this)}></div>
                    <div className='col black' data-row='1' data-col='2' onClick={handleMove.bind(this)}></div>
                    <div className='col white' data-row='1' data-col='3' onClick={handleMove.bind(this)}></div>
                    <div className='col black' data-row='1' data-col='4' onClick={handleMove.bind(this)}></div>
                    <div className='col white' data-row='1' data-col='5' onClick={handleMove.bind(this)}></div>
                    <div className='col black' data-row='1' data-col='6' onClick={handleMove.bind(this)}></div>
                    <div className='col white' data-row='1' data-col='7' onClick={handleMove.bind(this)}></div>
                </div>
                <div className='row'>
                    <div className='col white' data-row='2' data-col='0' onClick={handleMove.bind(this)}>6</div>
                    <div className='col black' data-row='2' data-col='1' onClick={handleMove.bind(this)}></div>
                    <div className='col white' data-row='2' data-col='2' onClick={handleMove.bind(this)}></div>
                    <div className='col black' data-row='2' data-col='3' onClick={handleMove.bind(this)}></div>
                    <div className='col white' data-row='2' data-col='4' onClick={handleMove.bind(this)}></div>
                    <div className='col black' data-row='2' data-col='5' onClick={handleMove.bind(this)}></div>
                    <div className='col white' data-row='2' data-col='6' onClick={handleMove.bind(this)}></div>
                    <div className='col black' data-row='2' data-col='7' onClick={handleMove.bind(this)}></div>
                </div>
                <div className='row'>
                    <div className='col black' data-row='3' data-col='0' onClick={handleMove.bind(this)}>5</div>
                    <div className='col white' data-row='3' data-col='1' onClick={handleMove.bind(this)}></div>
                    <div className='col black' data-row='3' data-col='2' onClick={handleMove.bind(this)}></div>
                    <div className='col white' data-row='3' data-col='3' onClick={handleMove.bind(this)}></div>
                    <div className='col black' data-row='3' data-col='4' onClick={handleMove.bind(this)}></div>
                    <div className='col white' data-row='3' data-col='5' onClick={handleMove.bind(this)}></div>
                    <div className='col black' data-row='3' data-col='6' onClick={handleMove.bind(this)}></div>
                    <div className='col white' data-row='3' data-col='7' onClick={handleMove.bind(this)}></div>
                </div>
                <div className='row'>
                    <div className='col white' data-row='4' data-col='0' onClick={handleMove.bind(this)}>4</div>
                    <div className='col black' data-row='4' data-col='1' onClick={handleMove.bind(this)}></div>
                    <div className='col white' data-row='4' data-col='2' onClick={handleMove.bind(this)}></div>
                    <div className='col black' data-row='4' data-col='3' onClick={handleMove.bind(this)}></div>
                    <div className='col white' data-row='4' data-col='4' onClick={handleMove.bind(this)}></div>
                    <div className='col black' data-row='4' data-col='5' onClick={handleMove.bind(this)}></div>
                    <div className='col white' data-row='4' data-col='6' onClick={handleMove.bind(this)}></div>
                    <div className='col black' data-row='4' data-col='7' onClick={handleMove.bind(this)}></div>
                </div>
                <div className='row'>
                    <div className='col black' data-row='5' data-col='0' onClick={handleMove.bind(this)}>3</div>
                    <div className='col white' data-row='5' data-col='1' onClick={handleMove.bind(this)}></div>
                    <div className='col black' data-row='5' data-col='2' onClick={handleMove.bind(this)}></div>
                    <div className='col white' data-row='5' data-col='3' onClick={handleMove.bind(this)}></div>
                    <div className='col black' data-row='5' data-col='4' onClick={handleMove.bind(this)}></div>
                    <div className='col white' data-row='5' data-col='5' onClick={handleMove.bind(this)}></div>
                    <div className='col black' data-row='5' data-col='6' onClick={handleMove.bind(this)}></div>
                    <div className='col white' data-row='5' data-col='7' onClick={handleMove.bind(this)}></div>
                </div>
                <div className='row'>
                    <div className='col white' data-row='6' data-col='0' onClick={handleMove.bind(this)}>2</div>
                    <div className='col black' data-row='6' data-col='1' onClick={handleMove.bind(this)}></div>
                    <div className='col white' data-row='6' data-col='2' onClick={handleMove.bind(this)}></div>
                    <div className='col black' data-row='6' data-col='3' onClick={handleMove.bind(this)}></div>
                    <div className='col white' data-row='6' data-col='4' onClick={handleMove.bind(this)}></div>
                    <div className='col black' data-row='6' data-col='5' onClick={handleMove.bind(this)}></div>
                    <div className='col white' data-row='6' data-col='6' onClick={handleMove.bind(this)}></div>
                    <div className='col black' data-row='6' data-col='7' onClick={handleMove.bind(this)}></div>
                </div>
                <div className='row'>
                    <div className='col black' data-row='7' data-col='0' onClick={handleMove.bind(this)}>
                        <span>1</span>a
                    </div>
                    <div className='col white' data-row='7' data-col='1' onClick={handleMove.bind(this)}><span/>b</div>
                    <div className='col black' data-row='7' data-col='2' onClick={handleMove.bind(this)}><span/>c</div>
                    <div className='col white' data-row='7' data-col='3' onClick={handleMove.bind(this)}><span/>d</div>
                    <div className='col black' data-row='7' data-col='4' onClick={handleMove.bind(this)}><span/>e</div>
                    <div className='col white' data-row='7' data-col='5' onClick={handleMove.bind(this)}><span/>f</div>
                    <div className='col black' data-row='7' data-col='6' onClick={handleMove.bind(this)}><span/>g</div>
                    <div className='col white' data-row='7' data-col='7' onClick={handleMove.bind(this)}><span/>h</div>
                </div>
            </div>
        </>
    )
}

export default Board;