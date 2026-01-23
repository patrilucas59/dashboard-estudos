import { TestBed } from '@angular/core/testing';

import { StudyCatalog } from './study-catalog';

describe('StudyCalalog', () => {
  let service: StudyCatalog;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudyCatalog);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
