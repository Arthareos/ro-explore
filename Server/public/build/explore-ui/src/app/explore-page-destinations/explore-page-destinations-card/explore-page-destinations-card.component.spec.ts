import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorePageDestinationsCardComponent } from './explore-page-destinations-card.component';

describe('ExplorePageDestinationsCardComponent', () => {
  let component: ExplorePageDestinationsCardComponent;
  let fixture: ComponentFixture<ExplorePageDestinationsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorePageDestinationsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorePageDestinationsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
