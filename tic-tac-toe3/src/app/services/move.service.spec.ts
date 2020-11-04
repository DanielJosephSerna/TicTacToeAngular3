import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { MoveService } from './move.service';
import { SetUp } from '../models/setup';
import { BestOf } from '../models/bestof';

describe('MoveService', () => {
  let httpMock;
  let service: MoveService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(MoveService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call GET /setup/human-computer with setUpHumanCompGame() and return an Observable of the result', () => {
    service.setUpHumanCompGame().subscribe(data => {
      expect(data.setUp.status).toBe('ONGOING');

      const mockRequest = httpMock.expectOne('http://localhost:8080/setup/human-computer');
      expect(mockRequest.request.method).toBe('GET');
      
      mockRequest.flush({
        isOver: 'ONGOING'
      });

      httpMock.verify();
    });
  });

  it('should call GET /setup/human-human with setUpHumanHumanGame() and return an Observable of the result', () => {
    service.setUpHumanHumanGame().subscribe(data => {
      expect(data.setUp.status).toBe('ONGOING');

      const mockRequest = httpMock.expectOne('http://localhost:8080/setup/human-human');
      expect(mockRequest.request.method).toBe('GET');

      mockRequest.flush({
        isOver: 'ONGOING'
      });

      httpMock.verify();
    });
  });

  it('should call POST /move/place-piece with performMove() and return an Observable of the result', () => {
    
    let tempBestOf: BestOf;

    service.performMove( tempBestOf ).subscribe(data => {
      expect(data.isOver).toBe('ONGOING');

      const mockRequest = httpMock.expectOne('http://localhost:8080/move/place-piece');
      expect(mockRequest.request.method).toBe('POST');

      mockRequest.flush({
        isOver: 'ONGOING'
      });

      httpMock.verify();
    })
  });

  it('should call POST /best-of/check with performBestOf() and return an Observable of the result', () => {

    let tempBestOf: BestOf;

    service.performBestOf(tempBestOf).subscribe(data => {
      expect(data.isOver).toBe('ONGOING');
    });

    const mockRequest = httpMock.expectOne('http://localhost:8080/best-of/check');
    expect(mockRequest.request.method).toBe('POST');

    mockRequest.flush({
      isOver: 'ONGOING'
    });

    httpMock.verify();

  });
});
