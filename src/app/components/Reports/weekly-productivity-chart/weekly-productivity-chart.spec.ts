import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyProductivityChart } from './weekly-productivity-chart';

describe('WeeklyProductivityChart', () => {
  let component: WeeklyProductivityChart;
  let fixture: ComponentFixture<WeeklyProductivityChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeeklyProductivityChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklyProductivityChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
