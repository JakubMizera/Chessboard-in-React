import piece from "./piece";
import Queen from "./queen";

class Pawn extends piece {
    constructor(player) {
        super(player, (player === 1 ? "../images/pawn-white.svg" : "../images/pawn-black.svg"));
        this.queeningPositions = {
            1: [0, 1, 2, 3, 4, 5, 6, 7],
            2: [56, 57, 58, 59, 60, 61, 62, 63]
        };
        this.hasMoved = false;
    }

    isMovePossible(src, dest, isDestEnemyOccupied) {

        if (this.player === 1) {
            if ((dest === src - 8 && !isDestEnemyOccupied) || (dest === src - 16 && this.hasMoved === false && !isDestEnemyOccupied)) {
                return true;
            } else if (isDestEnemyOccupied && (dest === src - 9 || dest === src - 7)) {
                return true;
            }
        } else if (this.player === 2) {
            if ((dest === src + 8 && !isDestEnemyOccupied) || (dest === src + 16 && this.hasMoved === false && !isDestEnemyOccupied)) {
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
        return this.queeningPositions[this.player].includes(dest);//returns true or false
    }

}

export default Pawn;