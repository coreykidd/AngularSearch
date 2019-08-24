import { SearchResult } from './../search-result';
import { FAKERESULTS } from './../fake-search-results';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  private searchUrl = 'http://localhost:51849/api/Search?index=emails&query=hotel';

  getResults(): Observable<SearchResult[]> {
    return this.http.get<SearchResult[]>(this.searchUrl);
  }

  constructor(
    private http: HttpClient  ) { }
}
