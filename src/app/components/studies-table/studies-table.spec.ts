import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiesTable } from './studies-table';

describe('StudiesTable', () => {
  let component: StudiesTable;
  let fixture: ComponentFixture<StudiesTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudiesTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudiesTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
