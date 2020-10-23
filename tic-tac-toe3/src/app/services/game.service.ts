import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  url1 = 'http://localhost:8080/setup-game';
  url2 = 'http://localhost:8080/play';
  // /setup-game/human-computer
  // /setup-game/human-human
  // /human-computer-easy
  // /human-computer-medium
  // /human-human

  constructor(private http: HttpClient) { }

  getNewHumanComputerGame(): Observable<Game> {
    return this.http.get<Game>(this.url1 + '/human-computer');
  }

  getNewHumanHumanGame(): Observable<Game> {
    return this.http.get<Game>(this.url1 + '/human-human');
  }

  performHumanAndEasyComputerMove(postGame: Game): Observable<Game> {
    return this.http.post<any>(this.url2 + '/human-computer-easy', postGame);
  }

  performHumanAndMediumComputerMove(postGame: Game): Observable<Game> {
    return this.http.post<any>(this.url2 + '/human-computer-medium', postGame);
  }

  performHumanAndHumanMove(postGame: Game): Observable<Game> {
    return this.http.post<any>(this.url2 + '/human-human', postGame);
  }
}
