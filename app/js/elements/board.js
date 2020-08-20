import React from 'react';
import {useEffect, useState} from 'react';


const Board = () => {
    const [position, setPosition] = useState([]);

    const handlePosition = () => {
        const pawnWhite = <img src="../../images/pawn-white.svg"/>

    }

    return (
        <>
            <div className='board'>
                <div className='row'>
                    <div className='col white' id='a8'>8</div>
                    <div className='col black' id='b8'></div>
                    <div className='col white' id='c8'></div>
                    <div className='col black' id='d8'></div>
                    <div className='col white' id='e8'></div>
                    <div className='col black' id='f8'></div>
                    <div className='col white' id='g8'></div>
                    <div className='col black' id='h8'></div>
                </div>
                <div className='row'>
                    <div className='col black' id='a7'>7</div>
                    <div className='col white' id='b7'></div>
                    <div className='col black' id='c7'></div>
                    <div className='col white' id='d7'></div>
                    <div className='col black' id='e7'></div>
                    <div className='col white' id='f7'></div>
                    <div className='col black' id='g7'></div>
                    <div className='col white' id='h7'></div>
                </div>
                <div className='row'>
                    <div className='col white' id='a6'>6</div>
                    <div className='col black' id='b6'></div>
                    <div className='col white' id='c6'></div>
                    <div className='col black' id='d6'></div>
                    <div className='col white' id='e6'></div>
                    <div className='col black' id='f6'></div>
                    <div className='col white' id='g6'></div>
                    <div className='col black' id='h6'></div>
                </div>
                <div className='row'>
                    <div className='col black' id='a5'>5</div>
                    <div className='col white' id='b5'></div>
                    <div className='col black' id='c5'></div>
                    <div className='col white' id='d5'></div>
                    <div className='col black' id='e5'></div>
                    <div className='col white' id='f5'></div>
                    <div className='col black' id='g5'></div>
                    <div className='col white' id='h5'></div>
                </div>
                <div className='row'>
                    <div className='col white' id='a4'>4</div>
                    <div className='col black' id='b4'></div>
                    <div className='col white' id='c4'></div>
                    <div className='col black' id='d4'></div>
                    <div className='col white' id='e4'></div>
                    <div className='col black' id='f4'></div>
                    <div className='col white' id='g4'></div>
                    <div className='col black' id='h4'></div>
                </div>
                <div className='row'>
                    <div className='col black' id='a3'>3</div>
                    <div className='col white' id='b3'></div>
                    <div className='col black' id='c3'></div>
                    <div className='col white' id='d3'></div>
                    <div className='col black' id='e3'></div>
                    <div className='col white' id='f3'></div>
                    <div className='col black' id='g3'></div>
                    <div className='col white' id='h3'></div>
                </div>
                <div className='row'>
                    <div className='col white' id='a2'>2</div>
                    <div className='col black' id='b2'></div>
                    <div className='col white' id='c2'></div>
                    <div className='col black' id='d2'><img src='../../images/pawn-white.svg'/></div>
                    <div className='col white' id='e2'></div>
                    <div className='col black' id='f2'></div>
                    <div className='col white' id='g2'></div>
                    <div className='col black' id='h2'></div>
                </div>
                <div className='row'>
                    <div className='col black' id='a1'>
                        <span>1</span>a
                    </div>
                    <div className='col white' id='b1'><span/>b</div>
                    <div className='col black' id='c1'><span/>c</div>
                    <div className='col white' id='d1'><span/>d</div>
                    <div className='col black' id='e1'><span/>e</div>
                    <div className='col white' id='f1'><span/>f</div>
                    <div className='col black' id='g1'><span/>g</div>
                    <div className='col white' id='h1'><span/>h</div>
                </div>
            </div>
            <button onClick={handlePosition}>set position</button>
        </>
    )
}

export default Board;