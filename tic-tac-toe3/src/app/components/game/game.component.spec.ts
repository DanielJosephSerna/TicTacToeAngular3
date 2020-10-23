import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { MaterialModule } from 'src/app/material/material.module';
import { mockGame1, mockGame2, mockGame3 } from 'src/app/mocks/mockGame';
import { Game } from 'src/app/models/game';
import { GameService } from 'src/app/services/game.service';

import { GameComponent } from './game.component';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;
  let mockGameService: MockGameService;
  let newGame: Game;

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

  beforeEach(async () => {
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

    it('should return false if game is OVER', () => {
      component.game = mockGame2;
      expect(component.gameOver).toBe(true);
    });

    it('should return false if game is TIE', () => {
      component.game = mockGame3;
      expect(component.gameOver).toBe(true);
    });
  });

  // describe('resetGame', () => {
  //   it('should reset the players, and game', () => {
  //     spyOn(component, 'resetGame');
  //     expect(component.resetGame).toHaveBeenCalled();
  //   });
  // });

});
