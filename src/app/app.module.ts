import { SearchFormComponent } from './search-form/search-form.component';
import { MatModModule } from './mat-mod/mat-mod.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchResultCardComponent } from './search-result-card/search-result-card.component';
import { SearchResultDashboardComponent } from './search-result-dashboard/search-result-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchResultComponent,
    SearchResultCardComponent,
    SearchResultDashboardComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatModModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
