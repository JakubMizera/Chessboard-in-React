import piece from "./piece";

class Bishop extends piece {
    constructor(player) {
        super(player, (player === 1? "../images/bishop-white.svg" : "../images/bishop-black.svg"));
    }
}

export default Bishop;