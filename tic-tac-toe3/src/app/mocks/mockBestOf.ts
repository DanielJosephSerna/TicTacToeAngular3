import { BestOf } from '../models/bestof';
import { People } from '../models/people';
import { SetUp } from '../models/setup';
import { TicTacToeBoard } from '../models/tictactoeboard';

export let mockSetUp1: SetUp = {
    peopleList: null,
    boardArr: null,
    status: 'ONGOING',
    countMoves: 0,
    winningLine: null
};

export let mockSetUp2: SetUp = {
    peopleList: null,
    boardArr: null,
    status: 'TIE',
    countMoves: 0,
    winningLine: null
};

export let mockSetUp3: SetUp = {
    peopleList: null,
    boardArr: null,
    status: 'OVER',
    countMoves: 0,
    winningLine: null
};

export let mockBestOf1: BestOf = {
    setUp: null,
    totalGamesToPlay: 0,
    score1: 0,
    score2: 0,
    isOver: 'FINAL'
};

export let mockBestOf2: BestOf = {
    setUp: null,
    totalGamesToPlay: 0,
    score1: 0,
    score2: 0,
    isOver: 'ONGOING'
};

export let mockBestOf3: BestOf = {
    setUp: mockSetUp1,
    totalGamesToPlay: 0,
    score1: 0,
    score2: 0,
    isOver: 'ONGOING'
};

export let mockBestOf4: BestOf = {
    setUp: mockSetUp2,
    totalGamesToPlay: 0,
    score1: 0,
    score2: 0,
    isOver: 'ONGOING'
};

export let mockBestOf5: BestOf = {
    setUp: mockSetUp3,
    totalGamesToPlay: 0,
    score1: 0,
    score2: 0,
    isOver: 'ONGOING'
};

export let mockPeople0: People = {
    type: 'COMPUTER',
    piece: 'O'
}

export let mockPeople1: People = {
    type: 'HUMAN1',
    piece: 'X'
}

export let mockPeople2: People = {
    type: 'HUMAN2',
    piece: 'O'
}

let mockPeopleList1 = [mockPeople1, mockPeople2];

let mockPeopleList2 = [mockPeople1, mockPeople0];

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

export let mockSetUp5: SetUp = {
    peopleList: mockPeopleList2,
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

export let mockBestOf7: BestOf = {
    setUp: mockSetUp5,
    totalGamesToPlay: 0,
    score1: 0,
    score2: 0,
    isOver: 'ONGOING'
};

/**
 * describe - move FOR HUMAN
 *
 */

export let mockSetUp6: SetUp = {
    peopleList: mockPeopleList1,
    boardArr: mockBoard1,
    status: 'ONGOING',
    countMoves: 0,
    winningLine: [0, 0, 0]
};

export let mockSetUp7: SetUp = {
    peopleList: mockPeopleList1,
    boardArr: mockBoard1,
    status: 'NOTONGOING',
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

export let mockBestOf9: BestOf = {
    setUp: mockSetUp6,
    totalGamesToPlay: 0,
    score1: 0,
    score2: 0,
    isOver: 'NOTONGOING'
};

export let mockBestOf10: BestOf = {
    setUp: mockSetUp7,
    totalGamesToPlay: 0,
    score1: 0,
    score2: 0,
    isOver: 'ONGOING'
};

/**
 * describe - move FOR COMPUTER
 *
 */

export let mockSetUp8: SetUp = {
    peopleList: mockPeopleList2,
    boardArr: mockBoard1,
    status: 'NOTONGOING',
    countMoves: 0,
    winningLine: [0, 0, 0]
};

export let mockSetUp9: SetUp = {
    peopleList: mockPeopleList2,
    boardArr: mockBoard1,
    status: 'ONGOING',
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

export let mockBestOf12: BestOf = {
    setUp: mockSetUp8,
    totalGamesToPlay: 0,
    score1: 0,
    score2: 0,
    isOver: 'NOTONGOING'
};

export let mockBestOf13: BestOf = {
    setUp: mockSetUp9,
    totalGamesToPlay: 0,
    score1: 0,
    score2: 0,
    isOver: 'ONGOING'
};
