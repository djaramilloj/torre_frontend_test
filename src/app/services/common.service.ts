import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person, Skill } from '../models/common';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  searchPeopleByName(name: string): Observable<any> {
    const baseUrl = 'https://torre.co/api/suite/people/name-suggestions';
    let params = {
      query: name,
      offset: 0,
      limit: 10
    };
    return this.http.get(baseUrl, {params});
  }

  getPersonByUsername(username: string): Promise<any> {
    const baseUrl = `${environment.uri}/people`;
    let params = {
      username
    };
    return this.http.get(baseUrl, {params}).toPromise();
  }

  getBestOpportunities(username: string): Observable<any> {
    const baseUrl = 'https://search.torre.co/opportunities/_search';
    const requestBody = {
      bestfor: {username}
    }
    return this.http.post(baseUrl, requestBody);
  }

  compareUsersBasedOnSkills(userOne: Person, userTwo: Person, skills: Skill[]): Promise<any> {
    const baseUrl = `${environment.uri}/people/compare`;
    return this.http.post(baseUrl, {userOne, userTwo, skills}).toPromise();
  }
}
