import { Board } from './board';
import { Player } from './player';

export class Game {
    playerList: Player[];
    board: Board;
    status: string;
    winningLine: number[];
}
