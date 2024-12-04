import { TestBed } from '@angular/core/testing';

import { ToggleActiveNavService } from '../toggle-active-nav.service';

describe('ToggleActiveNavService', () => {
  let service: ToggleActiveNavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleActiveNavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
