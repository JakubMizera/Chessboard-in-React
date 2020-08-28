import piece from "./piece";

class Knight extends piece {
    constructor(player) {
        super(player, (player === 1? "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Chess_nlt45.svg/1024px-Chess_nlt45.svg.png" : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Chess_ndt45.svg/1024px-Chess_ndt45.svg.png"));
    }
}

export default Knight;