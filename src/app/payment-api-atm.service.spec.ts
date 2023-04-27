import { TestBed } from '@angular/core/testing';

import { PaymentApiAtmService } from './payment-api-atm.service';

describe('PaymentApiAtmService', () => {
  let service: PaymentApiAtmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentApiAtmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
