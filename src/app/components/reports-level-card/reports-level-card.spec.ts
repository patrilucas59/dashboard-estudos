import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsLevelCard } from './reports-level-card';

describe('ReportsLevelCard', () => {
  let component: ReportsLevelCard;
  let fixture: ComponentFixture<ReportsLevelCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsLevelCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsLevelCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
