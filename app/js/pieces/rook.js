import piece from "./piece";

class Rook extends piece {
    constructor(player) {
        super(player, (player === 1? "../images/rook-white.svg" : "../images/rook-black.svg"));
    }
}
export default Rook;