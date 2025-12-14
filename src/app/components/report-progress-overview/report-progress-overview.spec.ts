import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportProgressOverview } from './report-progress-overview';

describe('ReportProgressOverview', () => {
  let component: ReportProgressOverview;
  let fixture: ComponentFixture<ReportProgressOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportProgressOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportProgressOverview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
