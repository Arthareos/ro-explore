import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExploreNavbarComponent } from './explore-navbar/explore-navbar.component';
import { ExploreNavbarButtonComponent } from './explore-navbar/explore-navbar-button/explore-navbar-button.component';
import { ExploreTitleComponent } from './typography/explore-title/explore-title.component';
import { ExploreTextComponent } from './typography/explore-text/explore-text.component';
import { ExploreLogoComponent } from './shared/explore-logo/explore-logo.component';

@NgModule({
  declarations: [
    AppComponent,
    ExploreNavbarComponent,
    ExploreNavbarButtonComponent,
    ExploreTitleComponent,
    ExploreTextComponent,
    ExploreLogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
