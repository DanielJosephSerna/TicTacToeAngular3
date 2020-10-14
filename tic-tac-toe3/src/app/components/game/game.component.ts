import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Game } from 'src/app/models/game';
import { Tiles } from 'src/app/models/tiles';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  controlsFormGroup: FormGroup;
  radioExample: FormControl = new FormControl;
  radioTouched: boolean = false;

  playerOne: string;
  playerTwo: string;
  game: Game;
  tiles: Tiles[];
  

  constructor(private fb: FormBuilder, private gameService: GameService) { }

  ngOnInit() {

    this.controlsFormGroup = this.fb.group({
      radioExample: this.radioExample
    })

    this.resetGame();
  }

  get gameOver(): boolean {
    if(this.game.status === "OVER") {

      return true;
    } else if(this.game.status === "TIE") {

      return true;
    }
    return false;
  }

  getDummy2() {
    this.controlsFormGroup.reset();
    
  }

  setUpGame() {

    this.controlsFormGroup.get('radioExample').valueChanges.subscribe(value => {

      this.radioTouched = true;

      if(value == 'HVC') {

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
          
          this.playerOne = this.game.playerList[0].type;
          this.playerTwo = this.game.playerList[1].type;
        });
      } else {

        
      }
    });
  }

  move(boardPosition: number) {

    if(this.radioTouched && this.game != null) {

      if(!this.gameOver) {

        if(this.tiles[boardPosition].text === " ") {

          let countSpace = 0; let gameSpace = 0;

          this.game.playerList[1].move = boardPosition;
          this.game.playerList[0].move = boardPosition;

          if(this.controlsFormGroup.get('radioExample').value == 'HVC') {

            this.gameService.performHumanAndComputerMove(this.game).subscribe(postData => {

              for(let i = 0; i < 9; i=i+1) {

                this.tiles[i].text = postData.board.boardArr[i];
              }

              this.game = postData;

              for(let i = 0; i < 9; i=i+1) {
            
                if(this.tiles[i].text === " ") {
    
                  countSpace = countSpace + 1;
                }
    
                if(this.game.board.boardArr[i] == ' ') {
                  gameSpace = gameSpace + 1;
                }
              }

              if(postData.status === "OVER") {

                for(let i = 0; i < 3; i=i+1) {

                  this.tiles[postData.winningLine[i]].color = 'palegreen';
                }
              }
            });
          } else {
            
            
          }
        }
      }
    } 
  }

  resetGame() {

    this.controlsFormGroup.reset();

    this.playerOne = ' ';
    this.playerTwo = ' ';
    this.game = null;

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
  }
}
