import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreMainButtonComponent } from './explore-main-button.component';

describe('ExploreMainButtonComponent', () => {
  let component: ExploreMainButtonComponent;
  let fixture: ComponentFixture<ExploreMainButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreMainButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreMainButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
