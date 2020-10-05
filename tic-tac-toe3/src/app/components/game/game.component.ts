import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { Tiles } from 'src/app/models/tiles';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  game: Game;
  
  tiles: Tiles[];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getGame();
  }

  get gameOver(): boolean {
    if(this.game.stateOfPlay !== "ONGOING") {
      return true;
    }
    return false;
  }

  getGame() {
    this.gameService.getNewHumanComputerGame().subscribe( data => {
      
      this.game = data;

      this.tiles = [
        {text: this.game.board.boardArr[0], cols: 1, rows: 1, color: 'lightblue', font: 72, position: 0},
        {text: this.game.board.boardArr[1], cols: 1, rows: 1, color: 'lightblue', font: 72, position: 1},
        {text: this.game.board.boardArr[2], cols: 1, rows: 1, color: 'lightblue', font: 72, position: 2},
        {text: this.game.board.boardArr[3], cols: 1, rows: 1, color: 'lightblue', font: 72, position: 3},
        {text: this.game.board.boardArr[4], cols: 1, rows: 1, color: 'lightblue', font: 72, position: 4},
        {text: this.game.board.boardArr[5], cols: 1, rows: 1, color: 'lightblue', font: 72, position: 5},
        {text: this.game.board.boardArr[6], cols: 1, rows: 1, color: 'lightblue', font: 72, position: 6},
        {text: this.game.board.boardArr[7], cols: 1, rows: 1, color: 'lightblue', font: 72, position: 7},
        {text: this.game.board.boardArr[8], cols: 1, rows: 1, color: 'lightblue', font: 72, position: 8}
      ];

    });
  }

  move(tempPosition: number) {
    
    if(!this.gameOver) {

      if(this.tiles[tempPosition].text === " ") {

        // make service call for /play/human-computer
        this.game.playerList[0].move = tempPosition;

        this.gameService.performHumanAndComputerMove(this.game).subscribe(postData => {
          console.log(postData);

          for(let i = 0; i < 9; i=i+1) {
            this.tiles[i].text = postData.board.boardArr[i];
            if(this.tiles[i].text !== " ") {
              this.tiles[i].color = "lightcoral";
            }
          }

          this.game = postData;
        });
      }

    }
    
  }

  resetGame() {

    this.game.winnerPiece = " "; // reset the game model
    this.game.winnerPlayer = " ";
    this.game.typeOfGame = "HUMAN VS COMPUTER";
    this.game.stateOfPlay = "ONGOING";
    this.game.board.boardArr = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    this.game.lastPlayer.lastPiece = "O";
    this.game.lastPlayer.previousPlayer = "COMPUTER";
    this.game.playerList[0].type = "HUMAN1";
    this.game.playerList[0].piece = "X";
    this.game.playerList[0].move = 0;
    this.game.playerList[1].type = "COMPUTER";
    this.game.playerList[1].piece = "O";
    this.game.playerList[1].move = 0;

    this.tiles =  [
      {text: this.game.board.boardArr[0], cols: 1, rows: 1, color: 'lightblue', font: 72, position: 0},
      {text: this.game.board.boardArr[1], cols: 1, rows: 1, color: 'lightblue', font: 72, position: 1},
      {text: this.game.board.boardArr[2], cols: 1, rows: 1, color: 'lightblue', font: 72, position: 2},
      {text: this.game.board.boardArr[3], cols: 1, rows: 1, color: 'lightblue', font: 72, position: 3},
      {text: this.game.board.boardArr[4], cols: 1, rows: 1, color: 'lightblue', font: 72, position: 4},
      {text: this.game.board.boardArr[5], cols: 1, rows: 1, color: 'lightblue', font: 72, position: 5},
      {text: this.game.board.boardArr[6], cols: 1, rows: 1, color: 'lightblue', font: 72, position: 6},
      {text: this.game.board.boardArr[7], cols: 1, rows: 1, color: 'lightblue', font: 72, position: 7},
      {text: this.game.board.boardArr[8], cols: 1, rows: 1, color: 'lightblue', font: 72, position: 8}
    ];
  }

}
