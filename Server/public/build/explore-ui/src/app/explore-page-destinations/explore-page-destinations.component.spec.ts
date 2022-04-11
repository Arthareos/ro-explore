import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorePageDestinationsComponent } from './explore-page-destinations.component';

describe('ExplorePageDestinationsComponent', () => {
  let component: ExplorePageDestinationsComponent;
  let fixture: ComponentFixture<ExplorePageDestinationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorePageDestinationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorePageDestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
