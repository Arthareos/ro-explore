import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-explore-navbar-button',
  templateUrl: './explore-navbar-button.component.html',
  styleUrls: ['./explore-navbar-button.component.scss']
})
export class ExploreNavbarButtonComponent {
  @Input("text") buttonText = '';
}
