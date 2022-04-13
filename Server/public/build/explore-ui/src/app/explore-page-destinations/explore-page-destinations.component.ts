import { Component, OnInit } from '@angular/core';
import { Destination } from './../services/interfaces/destination';
import { ExploreDestinationService } from './../services/explore-service-destination/explore-service-destination.service';

@Component({
  selector: 'app-explore-page-destinations',
  templateUrl: './explore-page-destinations.component.html',
  styleUrls: ['./explore-page-destinations.component.scss']
})
export class ExplorePageDestinationsComponent implements OnInit {
  public destinations: Array<Destination> = [];

  constructor(private destinationService: ExploreDestinationService) {}

  ngOnInit(): void {
    this.onGetDestinations();
  }

  onGetDestinations(): void {
    this.destinations = [];

    this.destinationService.getDestinations().subscribe({
      next: (v) => {
        this.destinations = v.data;
      },
      error: (e) => console.log(e),
      complete: () => {}
    });
  }
}
