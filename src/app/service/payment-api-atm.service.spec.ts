import { TestBed } from '@angular/core/testing';

import { PaymentAPIATMService } from './payment-api-atm.service';

describe('PaymentApiAtmService', () => {
  let service: PaymentAPIATMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentAPIATMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
