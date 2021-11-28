import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { constants } from '../const';
import { Stats, StatsDTO, Wiki } from '../models/stats'

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  private readonly urlAPI: string = `${constants.URL}api/v1/stats/`;
  private apiKEY: string = 'H8q9eSgR';

  constructor(private http: HttpClient) { }

  getStats(songId: string, token: string) {
    return this.http.get<Stats[]>(`${this.urlAPI}${songId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "api": this.apiKEY
      }
    })
  }

  getWiki(artistName: string, token: string) {
    return this.http.get<Wiki>(`${constants.URL}api/v1/artists/${artistName}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "api": this.apiKEY
      }
    })
  }
}
