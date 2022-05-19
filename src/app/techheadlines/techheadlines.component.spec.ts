import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechheadlinesComponent } from './techheadlines.component';

describe('TechheadlinesComponent', () => {
  let component: TechheadlinesComponent;
  let fixture: ComponentFixture<TechheadlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechheadlinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechheadlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
