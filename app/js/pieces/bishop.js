import piece from "./piece";

class Bishop extends piece {
    constructor(player) {
        super(player, (player === 1? "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chess_blt45.svg/1024px-Chess_blt45.svg.png" : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Chess_bdt45.svg/1024px-Chess_bdt45.svg.png"));
    }
}

export default Bishop;