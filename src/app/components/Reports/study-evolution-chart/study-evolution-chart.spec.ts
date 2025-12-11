import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyEvolutionChart } from './study-evolution-chart';

describe('StudyEvolutionChart', () => {
  let component: StudyEvolutionChart;
  let fixture: ComponentFixture<StudyEvolutionChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudyEvolutionChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyEvolutionChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
