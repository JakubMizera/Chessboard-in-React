import King from "../pieces/king";
import Pawn from "../pieces/pawn";
import Queen from "../pieces/queen";
import Rook from "../pieces/Rook";
import Knight from "../pieces/knight";
import Bishop from "../pieces/bishop";

export default function setUpBoard() {
    const squares = Array(64).fill(null);


    for (let i = 8; i < 16; i++) {
        squares[i] = new Pawn(2);
    }
    for (let i = 48; i < 56; i++) {
        squares[i] = new Pawn(1);
    }

    squares[4] = new King(2);
    squares[60] = new King(1);

    squares[3] = new Queen(2);
    squares[59] = new Queen(1);

    squares[0] = new Rook(2);
    squares[7] = new Rook(2);
    squares[56] = new Rook(1);
    squares[63] = new Rook(1);

    squares[1] = new Knight(2);
    squares[6] = new Knight(2);
    squares[57] = new Knight(1);
    squares[62] = new Knight(1);

    squares[2] = new Bishop(2);
    squares[5] = new Bishop(2);
    squares[61] = new Bishop(1);
    squares[58] = new Bishop(1);

    return squares;
}

