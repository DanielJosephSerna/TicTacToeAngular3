import { Board } from './board';
import { LastPlayer } from './last-player';
import { Player } from './player';

export class Game {
    playerList: Player[];
    lastPlayer: LastPlayer;
    board: Board;
    stateOfPlay: string;
    typeOfGame: string;
    winnerPlayer: string;
    winnerPiece: string;
}
