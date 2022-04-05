import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExploreNavbarComponent } from './explore-navbar/explore-navbar.component';
import { ExploreNavbarButtonComponent } from './explore-navbar/explore-navbar-button/explore-navbar-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ExploreNavbarComponent,
    ExploreNavbarButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
