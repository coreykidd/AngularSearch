import { SearchResult } from './../../search-result';
import { QueryService } from './../query.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-result-dashboard',
  templateUrl: './search-result-dashboard.component.html',
  styleUrls: ['./search-result-dashboard.component.css']
})
export class SearchResultDashboardComponent implements OnInit {

  searchResults: SearchResult[];

  constructor(
      private queryService: QueryService,
      private route: ActivatedRoute    ) { }

  ngOnInit() {
    this.getQuery();
  }

  getResults(query: string): void {
    this.queryService.getResults(query)
      .subscribe(searchResults => this.searchResults = searchResults);
  }

  getQuery(): void {
    const query = this.route.snapshot.paramMap.get('query');
    this.getResults(query);
  }
}
