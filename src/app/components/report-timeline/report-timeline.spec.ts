import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportTimeline } from './report-timeline';

describe('ReportTimeline', () => {
  let component: ReportTimeline;
  let fixture: ComponentFixture<ReportTimeline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportTimeline]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportTimeline);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
