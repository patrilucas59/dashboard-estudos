import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudySessionModal } from './study-session-modal';

describe('StudySessionModal', () => {
  let component: StudySessionModal;
  let fixture: ComponentFixture<StudySessionModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudySessionModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudySessionModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
