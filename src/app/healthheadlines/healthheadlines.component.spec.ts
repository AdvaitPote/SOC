import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthheadlinesComponent } from './healthheadlines.component';

describe('HealthheadlinesComponent', () => {
  let component: HealthheadlinesComponent;
  let fixture: ComponentFixture<HealthheadlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthheadlinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthheadlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
