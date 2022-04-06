import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreLogoComponent } from './explore-logo.component';

describe('ExploreLogoComponent', () => {
  let component: ExploreLogoComponent;
  let fixture: ComponentFixture<ExploreLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
