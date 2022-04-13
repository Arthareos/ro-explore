import { TestBed } from '@angular/core/testing';

import { ExploreServiceUserService } from './explore-service-user.service';

describe('ExploreServiceUserService', () => {
  let service: ExploreServiceUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExploreServiceUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
