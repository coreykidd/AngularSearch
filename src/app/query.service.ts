import { DomSanitizer } from '@angular/platform-browser';
import { SearchResult } from './../search-result';
import { Injectable, Sanitizer } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class QueryService {
  private searchUrl = 'http://localhost:51849/api/Search?index=emails&query=';

  getResults(query: string): Observable<SearchResult[]> {
    const url = `${this.searchUrl}${query}`;
    return this.http.get<SearchResult[]>(url).pipe(
      map(res => {
        const response: any = res;
        return response.map((item) => new SearchResult(item.subject, item.body, item.hexEntryId, this.sanitizer));
      }));
  }

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer) { }
}
