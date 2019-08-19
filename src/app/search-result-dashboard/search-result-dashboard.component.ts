import { SEARCHRESULTS } from './../../search-result-list';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result-dashboard',
  templateUrl: './search-result-dashboard.component.html',
  styleUrls: ['./search-result-dashboard.component.css']
})
export class SearchResultDashboardComponent implements OnInit {

  searchResults = SEARCHRESULTS;

  constructor() { }

  ngOnInit() {
  }

}
