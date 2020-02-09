import { TestBed } from '@angular/core/testing';

import { ProductsFirebaseService } from './products-firebase.service';

describe('ProductsFirebaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsFirebaseService = TestBed.get(ProductsFirebaseService);
    expect(service).toBeTruthy();
  });
});
