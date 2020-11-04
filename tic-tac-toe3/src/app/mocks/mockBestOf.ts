import { BestOf } from '../models/bestof';
import { SetUp } from '../models/setup';

export let mockSetUp1:SetUp = {
    peopleList: null,
    boardArr: null, 
    status: 'ONGOING',
    countMoves: 0,
    winningLine: null
}

export let mockSetUp2:SetUp = {
    peopleList: null,
    boardArr: null, 
    status: 'TIE',
    countMoves: 0,
    winningLine: null
}

export let mockSetUp3:SetUp = {
    peopleList: null,
    boardArr: null, 
    status: 'OVER',
    countMoves: 0,
    winningLine: null
}

export let mockBestOf1:BestOf = {
    setUp: null,
    totalGamesToPlay: 0,
    score1: 0,
    score2: 0,
    isOver: 'FINAL'
}

export let mockBestOf2:BestOf = {
    setUp: null,
    totalGamesToPlay: 0,
    score1: 0,
    score2: 0,
    isOver: 'ONGOING'
}

export let mockBestOf3:BestOf = {
    setUp: mockSetUp1,
    totalGamesToPlay: 0,
    score1: 0,
    score2: 0,
    isOver: 'ONGOING'
}

export let mockBestOf4:BestOf = {
    setUp: mockSetUp2,
    totalGamesToPlay: 0,
    score1: 0,
    score2: 0,
    isOver: 'ONGOING'
}

export let mockBestOf5:BestOf = {
    setUp: mockSetUp3,
    totalGamesToPlay: 0,
    score1: 0,
    score2: 0,
    isOver: 'ONGOING'
}
