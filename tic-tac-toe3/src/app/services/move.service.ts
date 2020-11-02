import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BestOf } from '../models/bestof';

@Injectable({
  providedIn: 'root'
})
export class MoveService {

  url1 = 'http://localhost:8080';
  // /setup/human-computer
  // /setup/human-human
  // /move/place-piece
  // /best-of/human-human
  // /best-of/human-comp
  // /best-of/check

  constructor(private http: HttpClient) { }

  setUpHumanCompGame(): Observable<BestOf> {
    return this.http.get<BestOf>(this.url1 + '/setup/human-computer');
  }

  setUpHumanHumanGame(): Observable<BestOf> {
    return this.http.get<BestOf>(this.url1 + '/setup/humna-human');
  }
}
