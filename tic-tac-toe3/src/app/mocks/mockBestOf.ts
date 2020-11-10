import { BestOf } from '../models/bestof';
import { People } from '../models/people';
import { SetUp } from '../models/setup';
import { TicTacToeBoard } from '../models/tictactoeboard';
import { Tiles } from '../models/tiles';


/**
 * HUMAN OR COMPUTER mocks
 */

/**
 * describe - isRoundOver
 * it - should return true if BestOf.isOver is FINAL
 */
export let mockBestOf1: BestOf = {
    setUp: null,
    totalGamesToPlay: 0,
    score1: 0,
    score2: 0,
    isOver: 'FINAL'
};

/**
 * describe - isRoundOver
 * it - should return false if BestOf.isOver is ONGOING
 */
export let mockBestOf2: BestOf = {
    setUp: null,
    totalGamesToPlay: 0,
    score1: 0,
    score2: 0,
    isOver: 'ONGOING'
};

/**
 * describe - isCurrentGameOver
 * it - should return false if BestOf.SetUp.status ONGOING
 */
export let mockSetUp1: SetUp = {
    peopleList: null,
    boardArr: null,
    status: 'ONGOING',
    countMoves: 0,
    winningLine: null
};

export let mockBestOf3: BestOf = {
    setUp: mockSetUp1,
    totalGamesToPlay: 0,
    score1: 0,
    score2: 0,
    isOver: 'ONGOING'
};

/**
 * describe - isCurrentGameOver
 * it - should return true if BestOf.SetUp.status TIE
 */
export let mockSetUp2: SetUp = {
    peopleList: null,
    boardArr: null,
    status: 'TIE',
    countMoves: 0,
    winningLine: null
};

export let mockBestOf4: BestOf = {
    setUp: mockSetUp2,
    totalGamesToPlay: 0,
    score1: 0,
    score2: 0,
    isOver: 'ONGOING'
};

/**
 * describe - isCurrentGameOver
 * it - should return true if BestOf.SetUp.status OVER
 */
export let mockSetUp3: SetUp = {
    peopleList: null,
    boardArr: null,
    status: 'OVER',
    countMoves: 0,
    winningLine: null
};

export let mockBestOf5: BestOf = {
    setUp: mockSetUp3,
    totalGamesToPlay: 0,
    score1: 0,
    score2: 0,
    isOver: 'ONGOING'
};

/**
 * HUMAN only mocks
 */

/**
 * describe - setUpHumanHumanGame
 * it - should return a new BestOf object for setUpHumanHumanGame service call
 */
export let mockPeople1: People = {
    type: 'HUMAN1',
    piece: 'X'
}

export let mockPeople2: People = {
    type: 'HUMAN2',
    piece: 'O'
}

let mockPeopleList1 = [mockPeople1, mockPeople2];

export let mockBoard1: TicTacToeBoard = {
    boardArr: [[' ', ' ', ' '],[' ', ' ', ' '],[' ', ' ', ' ']],
    peopleMove: 0
}

export let mockSetUp4: SetUp = {
    peopleList: mockPeopleList1,
    boardArr: mockBoard1,
    status: 'ONGOING',
    countMoves: 0,
    winningLine: [0, 0, 0]
};

export let mockBestOf6: BestOf = {
    setUp: mockSetUp4,
    totalGamesToPlay: 0,
    score1: 0,
    score2: 0,
    isOver: 'ONGOING'
};

/**
 * describe - move
 * it - should check if selectedRound is NULL
 * NO MOCK needed
 */

/**
 * describe - move
 * it - should check if selectedRound is NOT NULL and BestOf is NOT NULL
 */
export let mockSetUp6: SetUp = {
    peopleList: mockPeopleList1,
    boardArr: mockBoard1,
    status: 'ONGOING',
    countMoves: 0,
    winningLine: [0, 0, 0]
};

export let mockBestOf8: BestOf = {
    setUp: mockSetUp6,
    totalGamesToPlay: 0,
    score1: 0,
    score2: 0,
    isOver: 'ONGOING'
};

/**
 * describe - move
 * it - should check if selectedRound is NOT NULL and BestOf.isOver is NOT ONGOING
 */
export let mockBestOf9: BestOf = {
    setUp: mockSetUp6,
    totalGamesToPlay: 0,
    score1: 0,
    score2: 0,
    isOver: 'NOTONGOING'
};

/**
 * describe - move 
 * it - should check if selectedRound is NOT NULL and BestOf.SetUp.status is NOT ONGOING
 */
export let mockSetUp7: SetUp = {
    peopleList: mockPeopleList1,
    boardArr: mockBoard1,
    status: 'NOTONGOING',
    countMoves: 0,
    winningLine: [0, 0, 0]
};

export let mockBestOf10: BestOf = {
    setUp: mockSetUp7,
    totalGamesToPlay: 0,
    score1: 0,
    score2: 0,
    isOver: 'ONGOING'
};

/**
 * describe - move
 * it - should check if tileSpace is NOT EMPTY
 */
export let mockSetUp10: SetUp = {
    peopleList: mockPeopleList1,
    boardArr: mockBoard1,
    status: 'ONGOING',
    countMoves: 0,
    winningLine: [0, 0, 0]
};

export let mockBestOf14: BestOf = {
    setUp: mockSetUp10,
    totalGamesToPlay: 0,
    score1: 0,
    score2: 0,
    isOver: 'ONGOING'
};

export let mockTiles1: Tiles[] = [
    {text: 'Q', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 0},
    {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 1},
    {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 2},
    {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 3},
    {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 4},
    {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 5},
    {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 6},
    {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 7},
    {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 8}
  ];

  /**
 * describe - move
 * it - should check if tileSpace is EMPTY
 */

export let mockBoard2: TicTacToeBoard = {
    boardArr: [['X', ' ', ' '],[' ', ' ', ' '],[' ', ' ', ' ']],
    peopleMove: 0
}
export let mockSetUp11: SetUp = {
    peopleList: mockPeopleList1,
    boardArr: mockBoard2,
    status: 'ONGOING',
    countMoves: 0,
    winningLine: [0, 0, 0]
};

export let mockBestOf15: BestOf = {
    setUp: mockSetUp10,
    totalGamesToPlay: 0,
    score1: 0,
    score2: 0,
    isOver: 'ONGOING'
};

export let mockTiles2: Tiles[] = [
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

export let mockTiles3: Tiles[] = [
    {text: 'X', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 0},
    {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 1},
    {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 2},
    {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 3},
    {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 4},
    {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 5},
    {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 6},
    {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 7},
    {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 8}
  ];

/**
 * COMPUTER only mocks
 */

/**
 * describe - setUpHumanCompGame
 * it - should return a new BestOf object for setUpHumanCompGame service call
 */
export let mockPeople0: People = {
    type: 'COMPUTER',
    piece: 'O'
}

let mockPeopleList2 = [mockPeople1, mockPeople0];

export let mockSetUp5: SetUp = {
    peopleList: mockPeopleList2,
    boardArr: mockBoard1,
    status: 'ONGOING',
    countMoves: 0,
    winningLine: [0, 0, 0]
};

export let mockBestOf7: BestOf = {
    setUp: mockSetUp5,
    totalGamesToPlay: 0,
    score1: 0,
    score2: 0,
    isOver: 'ONGOING'
};

/**
 * describe - move
 * it - should check if selectedRound is NULL
 * NO MOCK needed
 */

 /**
  * describe - move
  * it - should check if selectedRound is NOT NULL and BestOf is NOT NULL
  */
export let mockSetUp8: SetUp = {
    peopleList: mockPeopleList2,
    boardArr: mockBoard1,
    status: 'NOTONGOING',
    countMoves: 0,
    winningLine: [0, 0, 0]
};

export let mockBestOf11: BestOf = {
    setUp: mockSetUp8,
    totalGamesToPlay: 0,
    score1: 0,
    score2: 0,
    isOver: 'ONGOING'
};

/**
 * describe - move
 * it - should check if selectedRound is NOT NULL and BestOf.isOver is NOT ONGOING
 */
export let mockBestOf12: BestOf = {
    setUp: mockSetUp8,
    totalGamesToPlay: 0,
    score1: 0,
    score2: 0,
    isOver: 'NOTONGOING'
};

/**
 * describe - move
 * it - should check if selectedRound is NOT NULL and BestOf.SetUp.status is NOT ONGOING
 */
export let mockSetUp9: SetUp = {
    peopleList: mockPeopleList2,
    boardArr: mockBoard1,
    status: 'NOTONGOING',
    countMoves: 0,
    winningLine: [0, 0, 0]
};

export let mockBestOf13: BestOf = {
    setUp: mockSetUp9,
    totalGamesToPlay: 0,
    score1: 0,
    score2: 0,
    isOver: 'ONGOING'
};

/**
 * describe - move
 * it - should check if tileSpace is NOT EMPTY
 */
export let mockSetUp12: SetUp = {
    peopleList: mockPeopleList2,
    boardArr: mockBoard1,
    status: 'ONGOING',
    countMoves: 0,
    winningLine: [0, 0, 0]
};

export let mockBestOf16: BestOf = {
    setUp: mockSetUp10,
    totalGamesToPlay: 0,
    score1: 0,
    score2: 0,
    isOver: 'ONGOING'
};

export let mockTiles4: Tiles[] = [
    {text: 'Q', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 0},
    {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 1},
    {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 2},
    {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 3},
    {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 4},
    {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 5},
    {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 6},
    {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 7},
    {text: ' ', cols: 1, rows: 1, color: 'lightblue', font: 72, position: 8}
  ];
