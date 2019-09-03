import { SafeUrl } from '@angular/platform-browser';
import { SearchResult } from './../../search-result';
import { QueryService } from './../query.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-result-dashboard',
  templateUrl: './search-result-dashboard.component.html',
  styleUrls: ['./search-result-dashboard.component.css']
})
export class SearchResultDashboardComponent implements OnInit {

  searchResults: SearchResult[];
  testResult: SearchResult;

  constructor(
      private queryService: QueryService,
      private route: ActivatedRoute,
      private router: Router) {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      }

  ngOnInit() {
    this.getQuery();
    this.testResult = { subject: 'dwa', body: 'dwadwadwadwadwadwadwadwa', hexEntryId: '1', safeUrl2: 'bhbhjbjbj'};
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

// constructor (private dataService: DataService){
//   dataService.getCompaniesCount().subscribe(res => {
//     this.companyCount = res.count);
//     // more code that depends on `res.count` being set goes here
//   });
//   dataService.getCompaniesCount().subscribe(res => console.log(res.count)); //works
// }
