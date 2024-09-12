import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { confidencialGuard } from './confidencial.guard';

describe('confidencialGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => confidencialGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
