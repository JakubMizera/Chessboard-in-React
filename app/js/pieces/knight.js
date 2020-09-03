import piece from "./piece";

class Knight extends piece {
    constructor(player) {
        super(player, (player === 1 ? "../images/knight-white.svg" : "../images/knight-black.svg"));
    }

    isMovePossible(src, dest) {
        return (src - 15 === dest ||
            src - 17 === dest ||
            src - 10 === dest ||
            src - 6 === dest ||
            src + 15 === dest ||
            src + 6 === dest ||
            src + 10 === dest ||
            src + 17 === dest);
    }

    getSrcToDestPath() {
        return [];
    }
}

export default Knight;