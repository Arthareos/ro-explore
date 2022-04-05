import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreNavbarButtonComponent } from './explore-navbar-button.component';

describe('ExploreNavbarButtonComponent', () => {
  let component: ExploreNavbarButtonComponent;
  let fixture: ComponentFixture<ExploreNavbarButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreNavbarButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreNavbarButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
