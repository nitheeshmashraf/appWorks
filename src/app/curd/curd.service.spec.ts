import { TestBed, inject } from '@angular/core/testing';

import { CURDService } from './curd.service';

describe('CURDService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CURDService]
    });
  });

  it('should be created', inject([CURDService], (service: CURDService) => {
    expect(service).toBeTruthy();
  }));
});
