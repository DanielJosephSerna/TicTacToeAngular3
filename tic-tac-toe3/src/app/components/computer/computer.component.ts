import { Component, OnInit } from '@angular/core';
import { BestOf } from 'src/app/models/bestof';
import { Tiles } from 'src/app/models/tiles';
import { MoveService } from 'src/app/services/move.service';

interface Rounds {
  value: number;
  viewValue: number;
}

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {

  rounds: Rounds[] = [
    {value: 1, viewValue: 1},
    {value: 3, viewValue: 3},
    {value: 5, viewValue: 5},
    {value: 7, viewValue: 7}
  ];

  playerOne: string;
  playerTwo: string;
  playerOneScore: number;
  playerTwoScore: number;
  bestOf: BestOf;
  tiles: Tiles[];
  selectedRound: number;

  constructor(private moveService: MoveService) { }

  ngOnInit(): void {

    this.resetGame();
  }

  get isRoundOver(): boolean {

    if (this.bestOf.isOver === 'FINAL') {

      return true;
    }

    return false;
  }

  get isCurrentGameOver(): boolean {

    if (this.bestOf.setUp.status === 'TIE') {

      return true;
    } else if (this.bestOf.setUp.status === 'OVER') {

      return true;
    }

    return false;
  }

  resetGame(): void {
    this.playerOne = ' ';
    this.playerTwo = ' ';
    this.playerOneScore = null;
    this.playerTwoScore = null;
    this.bestOf = null;

    this.tiles = [
      {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 0},
      {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 1},
      {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 2},
      {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 3},
      {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 4},
      {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 5},
      {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 6},
      {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 7},
      {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 8}
    ];

    this.selectedRound = 0;
  }

  setUpHumanCompGame(numberOfRounds: number): void {

    this.moveService.setUpHumanCompGame().subscribe( data => {

      this.bestOf = data;
      this.bestOf.totalGamesToPlay = this.selectedRound;

      this.playerOne = data.setUp.peopleList[0].type;
      this.playerTwo = data.setUp.peopleList[1].type;

      this.playerOneScore = data.score1;
      this.playerTwoScore = data.score2;

      this.tiles = [
        {text: data.setUp.boardArr.boardArr[0][0], cols: 1, rows: 1, color: 'lightblue', font: 72, position: 0},
        {text: data.setUp.boardArr.boardArr[0][1], cols: 1, rows: 1, color: 'lightblue', font: 72, position: 1},
        {text: data.setUp.boardArr.boardArr[0][2], cols: 1, rows: 1, color: 'lightblue', font: 72, position: 2},
        {text: data.setUp.boardArr.boardArr[1][0], cols: 1, rows: 1, color: 'lightblue', font: 72, position: 3},
        {text: data.setUp.boardArr.boardArr[1][1], cols: 1, rows: 1, color: 'lightblue', font: 72, position: 4},
        {text: data.setUp.boardArr.boardArr[1][2], cols: 1, rows: 1, color: 'lightblue', font: 72, position: 5},
        {text: data.setUp.boardArr.boardArr[2][0], cols: 1, rows: 1, color: 'lightblue', font: 72, position: 6},
        {text: data.setUp.boardArr.boardArr[2][1], cols: 1, rows: 1, color: 'lightblue', font: 72, position: 7},
        {text: data.setUp.boardArr.boardArr[2][2], cols: 1, rows: 1, color: 'lightblue', font: 72, position: 8}
      ];
    });

  }

  move(boardPosition: number): void {
    let myCount = 0;

    if (this.selectedRound !== null && this.bestOf !== null) {

      if (this.bestOf.isOver === 'ONGOING') {

        if (this.bestOf.setUp.status === 'ONGOING') {

          if (this.tiles[boardPosition].text === ' ') {

            this.bestOf.setUp.boardArr.peopleMove = boardPosition;

            this.moveService.performMove(this.bestOf).subscribe(moveData => {

              this.bestOf = moveData;

              for (let i = 0; i < 3; i = i + 1) {

                for (let j = 0; j < 3; j = j + 1) {

                  this.tiles[myCount].text = moveData.setUp.boardArr.boardArr[i][j];
                  myCount = myCount + 1;
                }
              }
              
              myCount = 0;

              if(moveData.setUp.countMoves > 4) {

                this.moveService.performBestOf(moveData).subscribe(bestOfData => {

                this.bestOf = bestOfData;
                this.playerOneScore = bestOfData.score1;
                this.playerTwoScore = bestOfData.score2;

                if(bestOfData.isOver === 'ONGOING') {

                  this.tiles = [
                    {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 0},
                    {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 1},
                    {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 2},
                    {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 3},
                    {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 4},
                    {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 5},
                    {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 6},
                    {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 7},
                    {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 8}
                  ];
                } else if (bestOfData.isOver === 'FINAL') {

                  this.tiles = [
                    {text: 'E', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 0},
                    {text: 'N', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 1},
                    {text: 'D', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 2},
                    {text: 'E', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 3},
                    {text: 'N', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 4},
                    {text: 'D', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 5},
                    {text: 'E', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 6},
                    {text: 'N', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 7},
                    {text: 'D', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 8}
                  ];
                }

                });
              }

            });
          }
        }
      }
    }
  }
}
