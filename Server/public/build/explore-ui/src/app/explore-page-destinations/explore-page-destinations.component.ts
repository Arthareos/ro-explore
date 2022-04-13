import { Destination } from './../services/interfaces/destination';
import { ExploreDestinationService } from './../services/explore-service-destination/explore-service-destination.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore-page-destinations',
  templateUrl: './explore-page-destinations.component.html',
  styleUrls: ['./explore-page-destinations.component.scss']
})
export class ExplorePageDestinationsComponent implements OnInit {
  private destinations: Destination[] | undefined;

  constructor(private destinationService: ExploreDestinationService) {}

  ngOnInit(): void {
    this.onGetDestinations();
  }

  onGetDestinations(): void {
    this.destinationService.getDestinations().subscribe(
      (response) => {
        this.destinations = response;
        console.log(response);
      },
      (error: any) => console.log(error),
      () => console.log('Done getting users')
    );
  }

}
