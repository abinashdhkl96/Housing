/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Product_detailsResolverService } from './product_details-resolver.service';

describe('Service: Product_detailsResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Product_detailsResolverService]
    });
  });

  it('should ...', inject([Product_detailsResolverService], (service: Product_detailsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
