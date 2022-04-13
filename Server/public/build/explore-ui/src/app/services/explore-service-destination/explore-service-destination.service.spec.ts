import { TestBed } from '@angular/core/testing';

import { ExploreDestinationService } from './explore-service-destination.service';

describe('ExploreServiceDestinationService', () => {
  let service: ExploreDestinationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExploreDestinationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
