import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultDashboardComponent } from './search-result-dashboard.component';

describe('SearchResultDashboardComponent', () => {
  let component: SearchResultDashboardComponent;
  let fixture: ComponentFixture<SearchResultDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
