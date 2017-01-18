/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PicorptaxService } from './picorptax.service';

describe('PicorptaxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PicorptaxService]
    });
  });

  it('should ...', inject([PicorptaxService], (service: PicorptaxService) => {
    expect(service).toBeTruthy();
  }));
});
