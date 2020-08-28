import piece from "./piece";

class King extends piece {
    constructor(player) {
        super(player, (player === 1? "../images/king-white.svg" : "../images/king-black.svg"));
    }

    isMovePossible(src, dest){
        return (src - 9 === dest ||
            src - 8 === dest ||
            src - 7 === dest ||
            src + 1 === dest ||
            src + 9 === dest ||
            src + 8 === dest ||
            src + 7 === dest ||
            src - 1 === dest);
    }

    getSrcToDestPath(src, dest){
        return [];
    }

}
export default King;