import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreMainButtonContainerComponent } from './explore-main-button-container.component';

describe('ExploreMainButtonContainerComponent', () => {
  let component: ExploreMainButtonContainerComponent;
  let fixture: ComponentFixture<ExploreMainButtonContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreMainButtonContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreMainButtonContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
