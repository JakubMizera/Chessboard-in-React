import piece from "./piece";

class King extends piece {
    constructor(player) {
        super(player, (player === 1 ? "../images/king-white.svg" : "../images/king-black.svg"));
        this.initialPositions = {
            1: [60],
            2: [4]
        }
    }

    isMovePossible(src, dest) {
        return (src - 9 === dest ||
            src - 8 === dest ||
            src - 7 === dest ||
            src + 1 === dest ||
            src + 9 === dest ||
            src + 8 === dest ||
            src + 7 === dest ||
            src - 1 === dest ||
            //castling rules
            src - 2 === dest ||
            src + 2 === dest);
    }

    getSrcToDestPath(src, dest) {
        if (dest === src - 2) {
            return [src - 1];
        } else if (dest === src + 2) {
            return [src + 1];
        }
        return [];
    }

}

export default King;