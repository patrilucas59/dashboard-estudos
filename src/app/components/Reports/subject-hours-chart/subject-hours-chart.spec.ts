import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectHoursChart } from './subject-hours-chart';

describe('SubjectHoursChart', () => {
  let component: SubjectHoursChart;
  let fixture: ComponentFixture<SubjectHoursChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectHoursChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectHoursChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
