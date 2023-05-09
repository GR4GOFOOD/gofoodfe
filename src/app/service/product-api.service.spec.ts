import { TestBed } from '@angular/core/testing';

import { ProductAPIService } from './product-api.service';

describe('ProductApiService', () => {
  let service: ProductAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
