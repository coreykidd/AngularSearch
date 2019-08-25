import { SearchResult } from './../search-result';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  private searchUrl = 'http://localhost:51849/api/Search?index=emails&query=';

  getResults(query: string): Observable<SearchResult[]> {
    const url = `${this.searchUrl}${query}`;
    return this.http.get<SearchResult[]>(url);
  }

  constructor(
    private http: HttpClient  ) { }
}
