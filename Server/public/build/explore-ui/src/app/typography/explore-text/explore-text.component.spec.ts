import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreTextComponent } from './explore-text.component';

describe('ExploreTextComponent', () => {
  let component: ExploreTextComponent;
  let fixture: ComponentFixture<ExploreTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
