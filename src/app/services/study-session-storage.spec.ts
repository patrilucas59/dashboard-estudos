import { TestBed } from '@angular/core/testing';

import { StudySessionStorage } from './study-session-storage';

describe('StudySessionStorage', () => {
  let service: StudySessionStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudySessionStorage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
