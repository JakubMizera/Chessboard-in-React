import King from "../pieces/king";

export default function setUpBoard() {
    const squares = Array(64).fill(null);


    squares[4] = new King(2);
    squares[60] = new King(1);


    return squares;
}

