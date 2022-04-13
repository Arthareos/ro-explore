import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExplorePageDestinationsComponent } from './explore-page-destinations/explore-page-destinations.component';
import { ExplorePageLandingComponent } from './explore-page-landing/explore-page-landing.component';

const ROUTES: Routes = [
  { path: 'home', component: ExplorePageLandingComponent },
  { path: 'destinations', component: ExplorePageDestinationsComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
