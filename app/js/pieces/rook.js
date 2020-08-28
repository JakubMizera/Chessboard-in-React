import piece from "./piece";

class Rook extends piece {
    constructor(player) {
        super(player, (player === 1? "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Chess_rlt45.svg/1024px-Chess_rlt45.svg.png" : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chess_rdt45.svg/1024px-Chess_rdt45.svg.png"));
    }
}
export default Rook;