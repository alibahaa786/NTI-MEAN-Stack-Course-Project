import { TestBed } from '@angular/core/testing';

import { TestChangeService } from './test-change.service';

describe('TestChangeService', () => {
  let service: TestChangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestChangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
