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

  // tiles: Tile[] [{text: 'One', cols: 1, rows: 1, color: 'lightblue'}]
  //   {text: 'Two', cols: 1, rows: 1, color: 'lightblue'},
  //   {text: 'Three', cols: 1, rows: 1, color: 'lightblue'},
  //   {text: 'Four', cols: 1, rows: 1, color: 'lightblue'},
  //   {text: 'Five', cols: 1, rows: 1, color: 'lightblue'},
  //   {text: 'Six', cols: 1, rows: 1, color: 'lightblue'},
  //   {text: 'Seven', cols: 1, rows: 1, color: 'lightblue'},
  //   {text: 'Eight', cols: 1, rows: 1, color: 'lightblue'},
  //   {text: 'Nine', cols: 1, rows: 1, color: 'lightblue'},
  // ];

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
        {text: this.game.board.boardArr[0][0], cols: 1, rows: 1, color: 'lightblue', font: 72, xCoord: 0, yCoord: 0, position: 0},
        {text: this.game.board.boardArr[0][2], cols: 1, rows: 1, color: 'lightblue', font: 72, xCoord: 0, yCoord: 2, position: 1},
        {text: this.game.board.boardArr[0][4], cols: 1, rows: 1, color: 'lightblue', font: 72, xCoord: 0, yCoord: 4, position: 2},
        {text: this.game.board.boardArr[2][0], cols: 1, rows: 1, color: 'lightblue', font: 72, xCoord: 2, yCoord: 0, position: 3},
        {text: this.game.board.boardArr[2][2], cols: 1, rows: 1, color: 'lightblue', font: 72, xCoord: 2, yCoord: 2, position: 4},
        {text: this.game.board.boardArr[2][4], cols: 1, rows: 1, color: 'lightblue', font: 72, xCoord: 2, yCoord: 4, position: 5},
        {text: this.game.board.boardArr[4][0], cols: 1, rows: 1, color: 'lightblue', font: 72, xCoord: 4, yCoord: 0, position: 6},
        {text: this.game.board.boardArr[4][2], cols: 1, rows: 1, color: 'lightblue', font: 72, xCoord: 4, yCoord: 2, position: 7},
        {text: this.game.board.boardArr[4][4], cols: 1, rows: 1, color: 'lightblue', font: 72, xCoord: 4, yCoord: 4, position: 8}
      ];

    });
  }

  move(tempX: number, tempY: number, tempPosition: number) {
    
    if(!this.gameOver) {

      if(this.tiles[tempPosition].text === " ") {

        // make service call for /play/human-computer
        // this.tiles[tempPosition].text = "QQQ";
        this.game.playerList[0].xmove = tempX;
        this.game.playerList[0].ymove = tempY;

        this.gameService.performHumanAndComputerMove(this.game).subscribe(postData => {
          console.log(postData);
          
          this.tiles[0].text = postData.board.boardArr[0][0];
          this.tiles[1].text = postData.board.boardArr[0][2];
          this.tiles[2].text = postData.board.boardArr[0][4];
          this.tiles[3].text = postData.board.boardArr[2][0];
          this.tiles[4].text = postData.board.boardArr[2][2];
          this.tiles[5].text = postData.board.boardArr[2][4];
          this.tiles[6].text = postData.board.boardArr[4][0];
          this.tiles[7].text = postData.board.boardArr[4][2];
          this.tiles[8].text = postData.board.boardArr[4][4];

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
    this.game.board.boardArr = [
      [" ", "|", " ", "|", " "],
      ["-", "+", "-", "+", "-"],
      [" ", "|", " ", "|", " "],
      ["-", "+", "-", "+", "-"],
      [" ", "|", " ", "|", " "]
    ];
    this.game.lastPlayer.lastPiece = "O";
    this.game.lastPlayer.previousPlayer = "COMPUTER";
    this.game.playerList[0].type = "HUMAN1";
    this.game.playerList[0].piece = "X";
    this.game.playerList[0].xmove = 0;
    this.game.playerList[0].ymove = 0;
    this.game.playerList[1].type = "COMPUTER";
    this.game.playerList[1].piece = "O";
    this.game.playerList[1].xmove = 0;
    this.game.playerList[1].ymove = 0;

    this.tiles =  [
      {text: this.game.board.boardArr[0][0], cols: 1, rows: 1, color: 'lightblue', font: 72, xCoord: 0, yCoord: 0, position: 0},
      {text: this.game.board.boardArr[0][2], cols: 1, rows: 1, color: 'lightblue', font: 72, xCoord: 0, yCoord: 2, position: 1},
      {text: this.game.board.boardArr[0][4], cols: 1, rows: 1, color: 'lightblue', font: 72, xCoord: 0, yCoord: 4, position: 2},
      {text: this.game.board.boardArr[2][0], cols: 1, rows: 1, color: 'lightblue', font: 72, xCoord: 2, yCoord: 0, position: 3},
      {text: this.game.board.boardArr[2][2], cols: 1, rows: 1, color: 'lightblue', font: 72, xCoord: 2, yCoord: 2, position: 4},
      {text: this.game.board.boardArr[2][4], cols: 1, rows: 1, color: 'lightblue', font: 72, xCoord: 2, yCoord: 4, position: 5},
      {text: this.game.board.boardArr[4][0], cols: 1, rows: 1, color: 'lightblue', font: 72, xCoord: 4, yCoord: 0, position: 6},
      {text: this.game.board.boardArr[4][2], cols: 1, rows: 1, color: 'lightblue', font: 72, xCoord: 4, yCoord: 2, position: 7},
      {text: this.game.board.boardArr[4][4], cols: 1, rows: 1, color: 'lightblue', font: 72, xCoord: 4, yCoord: 4, position: 8}
    ];
  }

}
