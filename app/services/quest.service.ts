import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class QuestService {

  baseUrl = 'https://apps.runescape.com/runemetrics/quests?user=';

  constructor(private http: HttpClient) { }

  getQuests(username: string) {
    return this.http.get(this.baseUrl + username);
  }

}
