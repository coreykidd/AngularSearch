import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  submitQuery(query) {
    this.router.navigate(['query', query]);
  }
}
