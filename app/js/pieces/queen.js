import piece from "./piece";

class Queen extends piece {
    constructor(player) {
        super(player, (player === 1 ? "../images/queen-white.svg" : "../images/queen-black.svg"));
    }
}

export default Queen;