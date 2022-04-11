import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorePageLandingComponent } from './explore-page-landing.component';

describe('ExplorePageLandingComponent', () => {
  let component: ExplorePageLandingComponent;
  let fixture: ComponentFixture<ExplorePageLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorePageLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorePageLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
