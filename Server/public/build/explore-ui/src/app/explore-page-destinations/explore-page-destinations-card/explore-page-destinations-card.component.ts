import {Component, Input } from '@angular/core';

@Component({
  selector: 'app-explore-page-destinations-card',
  templateUrl: './explore-page-destinations-card.component.html',
  styleUrls: ['./explore-page-destinations-card.component.scss']
})
export class ExplorePageDestinationsCardComponent {
  @Input("destinationName") name = "";
  @Input("destinationDescription") description = "";
  @Input("destinationCoordX") coordX = "";
  @Input("destinationCoordY") coordY = "";
  @Input("destinationId") id = "";

  constructor() {}
}
