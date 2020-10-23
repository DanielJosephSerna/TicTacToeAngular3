import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { GameService } from './game.service';
import { Game } from '../models/game';

describe('GameService', () => {
  let httpMock;
  let service: GameService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(GameService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call GET /setup-game/human-computer with getNewHumanComputerGame() and return an Observable of the result', () => {
    service.getNewHumanComputerGame().subscribe(data => {
      expect(data.status).toBe('ONGOING');
    });

    
    const mockRequest = httpMock.expectOne('http://localhost:8080/setup-game/human-computer');
    expect(mockRequest.request.method).toBe('GET');

    mockRequest.flush({
      status: 'ONGOING'
    })

    httpMock.verify();

  });

  it('should call GET /setup-game/human-human with getNewHumanHumanGame() and return an Observable of the result', () => {
    service.getNewHumanHumanGame().subscribe(data => {
      expect(data.status).toBe('ONGOING');
    });

    
    const mockRequest = httpMock.expectOne('http://localhost:8080/setup-game/human-human');
    expect(mockRequest.request.method).toBe('GET');

    mockRequest.flush({
      status: 'ONGOING'
    })

    httpMock.verify();

  });

  it('should call POST /play/human-computer-easy with performHumanAndEasyComputerMove() and return an Observable of the result', () => {

    let tempGame: Game;
    
    service.performHumanAndEasyComputerMove( tempGame ).subscribe(data => {
      expect(data.status).toBe('ONGOING');
    });

    
    const mockRequest = httpMock.expectOne('http://localhost:8080/play/human-computer-easy');
    expect(mockRequest.request.method).toBe('POST');

    mockRequest.flush({
      status: 'ONGOING'
    })

    httpMock.verify();

  });

  it('should call POST /play/human-computer-medium with performHumanAndMediumComputerMove() and return an Observable of the result', () => {
    let tempGame: Game;

    service.performHumanAndMediumComputerMove(tempGame).subscribe(data => {
      expect(data.status).toBe('ONGOING');
    });

    
    const mockRequest = httpMock.expectOne('http://localhost:8080/play/human-computer-medium');
    expect(mockRequest.request.method).toBe('POST');

    mockRequest.flush({
      status: 'ONGOING'
    })

    httpMock.verify();

  });

  it('should call POST /play/human-human with performHumanAndHumanMove() and return an Observable of the result', () => {
    let tempGame: Game;

    service.performHumanAndHumanMove(tempGame).subscribe(data => {
      expect(data.status).toBe('ONGOING');
    });

    
    const mockRequest = httpMock.expectOne('http://localhost:8080/play/human-human');
    expect(mockRequest.request.method).toBe('POST');

    mockRequest.flush({
      status: 'ONGOING'
    })

    httpMock.verify();

  });

});
