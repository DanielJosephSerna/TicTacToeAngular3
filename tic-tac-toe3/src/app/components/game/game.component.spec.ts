import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { MaterialModule } from 'src/app/material/material.module';
import { mockGame1, mockGame2, mockGame3 } from 'src/app/mocks/mockGame';
import { Board } from 'src/app/models/board';
import { Game } from 'src/app/models/game';
import { Player } from 'src/app/models/player';
import { GameService } from 'src/app/services/game.service';

import { GameComponent } from './game.component';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;
  let mockGameService: MockGameService;

  class MockGameService {
    getNewHumanComputerGame():Observable<Game> {
      return of();
    }

    getNewHumanHumanGame():Observable<Game> {
      return of();
    }

    performHumanAndEasyComputerMove(game:Game):Observable<Game> {
      return of();
    }

    performHumanAndMediumComputerMove(game:Game):Observable<Game> {
      return of();
    }

    performHumanAndHumanMove(game:Game):Observable<Game> {
      return of();
    }
  }

  let mockBoard: Board = {
    boardArr: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
  }

  let mockPlayer0: Player = {
    type: 'COMPUTER',
    piece: 'O',
    move: 0
  }

  let mockPlayer1: Player = {
    type: 'HUMAN1',
    piece: 'X',
    move: 0
  }

  let mockPlayer2: Player = {
    type: 'HUMAN2',
    piece: 'O',
    move: 0
  }

  let mockHumanCompPlayers = [mockPlayer1, mockPlayer0];
  let mockHumanPlayers = [mockPlayer1, mockPlayer2];

  let mockGameHumanComp: Game = {
    playerList: mockHumanCompPlayers,
    board: mockBoard,
    status: 'ONGOING',
    winningLine: [0, 0, 0]
  }

  let mockGameHumanHuman: Game = {
    playerList: mockHumanPlayers,
    board: mockBoard,
    status: 'ONGOING',
    winningLine: [0, 0, 0]
  }

  beforeEach(async () => {

    mockGameService = new MockGameService();

    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
      ],
       declarations: [ GameComponent ],
      providers: [
        { provide: GameService, useValue: mockGameService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('gameOver', () => {
    it('should return false if game is ONGOING', () => {
      component.game = mockGame1;
      expect(component.gameOver).toBe(false);
    });

    it('should return true if game is OVER', () => {
      component.game = mockGame2;
      expect(component.gameOver).toBe(true);
    });

    it('should return true if game is TIE', () => {
      component.game = mockGame3;
      expect(component.gameOver).toBe(true);
    });
  });

  describe('set up games', () => {
    it('should call setUpHumanHumanGame() and return game observable', () => {
      component.game = mockGame1;
      
      spyOn(mockGameService, 'getNewHumanHumanGame').and.returnValue(of(mockGameHumanHuman));
      component.setUpHumanHumanGame();

      expect(component.game.status).toEqual(mockGameHumanHuman.status);
    });

    it('should call setUpHumanComputerGame() and return game observable', () => {
      component.game = mockGame1;
      
      spyOn(mockGameService, 'getNewHumanComputerGame').and.returnValue(of(mockGameHumanComp));
      component.setUpHumanComputerGame();

      expect(component.game.status).toEqual(mockGameHumanComp.status);
    });
  });

});
