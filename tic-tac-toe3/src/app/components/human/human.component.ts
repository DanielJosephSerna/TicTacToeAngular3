import { Component, OnInit } from '@angular/core';
import { BestOf } from 'src/app/models/bestof';
import { Tiles } from 'src/app/models/tiles';
import { MoveService } from 'src/app/services/move.service';

interface Rounds {
  value: number;
  viewValue: number;
}

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class HumanComponent implements OnInit {

  rounds: Rounds[] = [
    {value: 1, viewValue: 1},
    {value: 3, viewValue: 3},
    {value: 5, viewValue: 5},
    {value: 7, viewValue: 7}
  ];

  playerOne: string;
  playerTwo: string;
  bestOf: BestOf;
  tiles: Tiles[];
  selectedRound: number;

  constructor(private moveService: MoveService) { }

  ngOnInit(): void {

    this.resetGame();
  }

  get isRoundOver(): boolean {

    if(this.bestOf.isOver === 'FINAL') {

      return true;
    }

    return false;
  }

  get isCurrentGameOver(): boolean {

    if(this.bestOf.setUp.status === 'TIE') {
      
      return true;
    } else if(this.bestOf.setUp.status === 'OVER') {
      
      return true; 
    }

    return false;
  }

  resetGame() {
    this.playerOne = ' ';
    this.playerTwo = ' ';
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

  setUpHumanHumanGame(numberOfRounds: number) {

    this.moveService.setUpHumanHumanGame().subscribe( data => {

      this.bestOf = data;

      this.playerOne = this.bestOf.setUp.peopleList[0].type;
      this.playerTwo = this.bestOf.setUp.peopleList[1].type;

      this.tiles = [
        {text: this.bestOf.setUp.boardArr[0], cols: 1, rows: 1, color: 'lightblue', font: 72, position: 0},
        {text: this.bestOf.setUp.boardArr[1], cols: 1, rows: 1, color: 'lightblue', font: 72, position: 1},
        {text: this.bestOf.setUp.boardArr[2], cols: 1, rows: 1, color: 'lightblue', font: 72, position: 2},
        {text: this.bestOf.setUp.boardArr[3], cols: 1, rows: 1, color: 'lightblue', font: 72, position: 3},
        {text: this.bestOf.setUp.boardArr[4], cols: 1, rows: 1, color: 'lightblue', font: 72, position: 4},
        {text: this.bestOf.setUp.boardArr[5], cols: 1, rows: 1, color: 'lightblue', font: 72, position: 5},
        {text: this.bestOf.setUp.boardArr[6], cols: 1, rows: 1, color: 'lightblue', font: 72, position: 6},
        {text: this.bestOf.setUp.boardArr[7], cols: 1, rows: 1, color: 'lightblue', font: 72, position: 7},
        {text: this.bestOf.setUp.boardArr[8], cols: 1, rows: 1, color: 'lightblue', font: 72, position: 8}
      ];
    });

  }

}
