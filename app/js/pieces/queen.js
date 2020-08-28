import piece from "./piece";

class Queen extends piece {
    constructor(player) {
        super(player, (player === 1 ? "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Chess_qlt45.svg/1024px-Chess_qlt45.svg.png" : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chess_qdt45.svg/1024px-Chess_qdt45.svg.png"));
    }
}

export default Queen;