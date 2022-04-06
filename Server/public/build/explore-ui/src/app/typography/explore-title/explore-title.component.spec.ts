import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreTitleComponent } from './explore-title.component';

describe('ExploreTitleComponent', () => {
  let component: ExploreTitleComponent;
  let fixture: ComponentFixture<ExploreTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
