import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExploreNavbarComponent } from './explore-navbar/explore-navbar.component';
import { ExploreNavbarButtonComponent } from './explore-navbar/explore-navbar-button/explore-navbar-button.component';
import { ExploreTitleComponent } from './typography/explore-title/explore-title.component';
import { ExploreTextComponent } from './typography/explore-text/explore-text.component';
import { ExploreLogoComponent } from './shared/explore-logo/explore-logo.component';
import { ExploreMainButtonComponent } from './shared/explore-main-button/explore-main-button.component';
import { ExploreMainButtonContainerComponent } from './shared/explore-main-button-container/explore-main-button-container.component';
import { ExplorePageDestinationsComponent } from './explore-page-destinations/explore-page-destinations.component';
import { ExplorePageLandingComponent } from './explore-page-landing/explore-page-landing.component';
import { ExplorePageDestinationsCardComponent } from './explore-page-destinations/explore-page-destinations-card/explore-page-destinations-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ExploreNavbarComponent,
    ExploreNavbarButtonComponent,
    ExploreTitleComponent,
    ExploreTextComponent,
    ExploreLogoComponent,
    ExploreMainButtonComponent,
    ExploreMainButtonContainerComponent,
    ExplorePageDestinationsComponent,
    ExplorePageLandingComponent,
    ExplorePageDestinationsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
