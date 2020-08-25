import React from 'react';

const BoardV2 = () => {

    const boardArray = [];
    const boardSize = 8;

    for (let i = 0; i < boardSize; i++) {
        boardArray[i] = [];
        for (let j = 0; j < boardSize; j++) {
            boardArray[i][j] = j;
        }
    }


    console.log(boardArray);
    return (
        <div className='board'>{
            boardArray.map((el, i) => (
                <div className='row' key={i}>{el.map((el, i) => (
                    <div className='col' key={i}>{el}</div>
                ))}</div>
            ))
        }</div>
    )
}

export default BoardV2;