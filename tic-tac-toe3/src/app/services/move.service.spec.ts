import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { MoveService } from './move.service';
import { SetUp } from '../models/setup';

describe('MoveService', () => {
  let httpMock;
  let service: MoveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoveService);
  });
  service = TestBed.inject(MoveService);
  httpMock = TestBed.inject(HttpTestingController);

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call GET /setup/human-computer with setUpHumanCompGame() and return an Observable of the result', () => {
    service.setUpHumanCompGame().subscribe(data => {
      expect(data.setUp.status).toBe('ONGOING');
    });
  });

  it('should call GET /setup/human-human with setUpHumanHumanGame() and return an Observable of the result', () => {
    service.setUpHumanHumanGame().subscribe(data => {
      expect(data.setUp.status).toBe('ONGOING');
    });
  });

  it('should call POST /move/place-piece with performMove() and return an Observable of the result', () => {

  });

  it('should call POST /best-of/check with performBestOf() and return an Observable of the result', () => {

  });
});
