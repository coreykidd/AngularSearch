import { SearchResult } from './../../search-result';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  searchResult: SearchResult = {
    meta1: 'metadata 1 value',
    meta2: 'metadata 2 value',
    text: 'This is a good body text.  Hello world!',
    title: 'This is some title text'
  };

  constructor() { }

  ngOnInit() {
  }

}
