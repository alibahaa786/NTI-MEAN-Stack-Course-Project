import { TestBed } from '@angular/core/testing';

import { ToggleLoginPopupService } from './toggle-login-popup.service';

describe('ToggleLoginPopupService', () => {
  let service: ToggleLoginPopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleLoginPopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
