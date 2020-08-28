import piece from "./piece";

class Pawn extends piece {
    constructor(player) {
        super(player, (player === 1 ? "../images/pawn-white.svg" : "../images/pawn-black.svg"));
    }
}

export default Pawn;