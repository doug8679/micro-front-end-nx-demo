import { TestBed } from '@angular/core/testing';

import { ClaimsClientService } from './claims-client.service';

describe('ClaimsClientService', () => {
  let service: ClaimsClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClaimsClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
