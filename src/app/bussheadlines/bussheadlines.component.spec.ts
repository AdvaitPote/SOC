import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussheadlinesComponent } from './bussheadlines.component';

describe('BussheadlinesComponent', () => {
  let component: BussheadlinesComponent;
  let fixture: ComponentFixture<BussheadlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BussheadlinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BussheadlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
