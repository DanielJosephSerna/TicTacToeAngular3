// import { Component, OnInit } from '@angular/core';
// import { BestOf } from 'src/app/models/bestof';
// import { Tiles } from 'src/app/models/tiles';
// import { MoveService } from 'src/app/services/move.service';

// @Component({
//   selector: 'app-setup',
//   templateUrl: './setup.component.html',
//   styleUrls: ['./setup.component.css']
// })
// export class SetupComponent implements OnInit {

//   playerOne: string;
//   playerTwo: string;
//   bestOf: BestOf;
//   tiles: Tiles[];

//   constructor(private moveService: MoveService) { }

//   ngOnInit(): void {
//     // possible call backend to set up game, undecided about this
//     this.resetGame();
//   }

//   get isRoundOver(): boolean {

//     if(this.bestOf.isOver === 'FINAL') {

//       return true;
//     }

//     return false;
//   }

//   get isCurrentGameOver(): boolean {

//     if(this.bestOf.setUp.status === 'TIE') {
      
//       return true;
//     } else if(this.bestOf.setUp.status === 'OVER') {
      
//       return true; 
//     }

//     return false;
//   }

//   resetGame() {
//     this.playerOne = ' ';
//     this.playerTwo = ' ';
//     this.bestOf = null;
    
//     this.tiles = [
//       {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 0},
//       {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 1},
//       {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 2},
//       {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 3},
//       {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 4},
//       {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 5},
//       {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 6},
//       {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 7},
//       {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 8}
//     ];
//   }

// }
