import { ExplorePageDestinationsComponent } from './explore-page-destinations/explore-page-destinations.component';
import { ExplorePageLandingComponent } from './explore-page-landing/explore-page-landing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ExplorePageLandingComponent },
  { path: 'destinations', component: ExplorePageDestinationsComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
