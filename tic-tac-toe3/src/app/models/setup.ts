import { People } from './people';
import { TicTacToeBoard } from './tictactoeboard';

export class SetUp {
    peopleList: People[];
    boardArr: TicTacToeBoard;
    status: string;
    countMoves: number;
    winningLine: number[];
}
