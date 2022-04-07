import { Component } from '@angular/core';

@Component({
  selector: 'app-explore-main-button-container',
  templateUrl: './explore-main-button-container.component.html',
  styleUrls: ['./explore-main-button-container.component.scss']
})
export class ExploreMainButtonContainerComponent {
  public types: string[] = ["Landmarks", "Museums", "Monuments", "Hikes"];

  constructor() {}
}
