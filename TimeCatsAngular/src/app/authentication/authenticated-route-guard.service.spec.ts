import { TestBed } from '@angular/core/testing';

import { AuthenticatedRouteGuardService } from './authenticated-route-guard.service';

describe('AuthenticatedRouteGuardService', () => {
  let service: AuthenticatedRouteGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticatedRouteGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
