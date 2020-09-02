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
        console.log(this.hasMoved);
        console.log(this.initialPositions[this.player]);
        if (src - 9 === dest ||
            src - 8 === dest ||
            src - 7 === dest ||
            src + 1 === dest ||
            src + 9 === dest ||
            src + 8 === dest ||
            src + 7 === dest ||
            src - 1 === dest) {
            return true;
        }
        if (src === this.initialPositions[this.player] && this.hasMoved === false) {
            if (src - 2 === dest && squares[src - 3] === null && squares[src - 4].hasMoved === false) {
                return true;
            } else if (src + 2 === dest && squares[src + 3].hasMoved === false) {
                return true;
            }
        } else return false;
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