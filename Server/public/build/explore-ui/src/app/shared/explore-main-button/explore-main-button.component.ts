import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-explore-main-button',
  templateUrl: './explore-main-button.component.html',
  styleUrls: ['./explore-main-button.component.scss']
})
export class ExploreMainButtonComponent {
  @Input("text") buttonText = '';
}
