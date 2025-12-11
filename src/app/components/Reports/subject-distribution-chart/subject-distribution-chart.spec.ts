import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectDistributionChart } from './subject-distribution-chart';

describe('SubjectDistributionChart', () => {
  let component: SubjectDistributionChart;
  let fixture: ComponentFixture<SubjectDistributionChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectDistributionChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectDistributionChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
