import piece from "./piece";

class Knight extends piece {
    constructor(player) {
        super(player, (player === 1? "../images/knight-white.svg" : "../images/knight-black.svg"));
    }
}

export default Knight;