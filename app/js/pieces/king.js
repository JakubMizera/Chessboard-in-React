import piece from "./piece";

class King extends piece {
    constructor(player) {
        super(player, (player === 1 ? "../images/king-white.svg" : "../images/king-black.svg"));
        this.initialPositions = {
            1: 60,
            2: 4
        }
        this.hasMoved = false;
    }

    isMovePossible(src, dest, isDestEnemyOccupied, squares) {
        const standardMove = (src - 9 === dest ||
            src - 8 === dest ||
            src - 7 === dest ||
            src + 1 === dest ||
            src + 9 === dest ||
            src + 8 === dest ||
            src + 7 === dest ||
            src - 1 === dest);

        if (src === this.initialPositions[this.player] && squares[src - 3] === null) {
            return (standardMove || src - 2 === dest);
        } else if (src === this.initialPositions[this.player]) {
            return (standardMove || src + 2 === dest);
        } else return standardMove;
    }

    getSrcToDestPath(src, dest) {
        if (dest === src - 2) {
            return [src - 1];
        } else if (dest === src + 2) {
            return [src + 1];
        }
        return [];
    }

    isCastlingPossible(src, dest) {
        if (src - 2 === dest || src + 2 === dest) {
            return this.initialPositions[this.player] === src;//returns true or false
        }
        return false;
    }

}

export default King;