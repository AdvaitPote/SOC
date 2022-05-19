import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnttheadlinesComponent } from './enttheadlines.component';

describe('EnttheadlinesComponent', () => {
  let component: EnttheadlinesComponent;
  let fixture: ComponentFixture<EnttheadlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnttheadlinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnttheadlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
