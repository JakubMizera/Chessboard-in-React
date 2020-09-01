import piece from "./piece";
import Queen from "./queen";

class Pawn extends piece {
    constructor(player) {
        super(player, (player === 1 ? "../images/pawn-white.svg" : "../images/pawn-black.svg"));
        this.initialPositions = {
            1: [48, 49, 50, 51, 52, 53, 54, 55],
            2: [8, 9, 10, 11, 12, 13, 14, 15]
        }
        this.queeningPositions = {
            1: [0, 1, 2, 3, 4, 5, 6, 7],
            2: [56, 57, 58, 59, 60, 61, 62, 63]
        }
    }

    isMovePossible(src, dest, isDestEnemyOccupied) {

        if (this.player === 1) {
            if ((dest === src - 8 && !isDestEnemyOccupied) || (dest === src - 16 && this.initialPositions[1].indexOf(src) !== -1)) {
                return true;
            } else if (isDestEnemyOccupied && (dest === src - 9 || dest === src - 7)) {
                return true;
            }
        } else if (this.player === 2) {
            if ((dest === src + 8 && !isDestEnemyOccupied) || (dest === src + 16 && this.initialPositions[2].indexOf(src) !== -1)) {
                return true;
            } else if (isDestEnemyOccupied && (dest === src + 9 || dest === src + 7)) {
                return true;
            }
        }
        return false;
    }

    getSrcToDestPath(src, dest) {
        if (dest === src - 16) {
            return [src - 8];
        } else if (dest === src + 16) {
            return [src + 8];
        }
        return [];
    }

    isQueeningPossible(dest) {
        return this.queeningPositions[this.player].includes(dest);
    }

}

export default Pawn;