import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsheadlinesComponent } from './sportsheadlines.component';

describe('SportsheadlinesComponent', () => {
  let component: SportsheadlinesComponent;
  let fixture: ComponentFixture<SportsheadlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsheadlinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsheadlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
