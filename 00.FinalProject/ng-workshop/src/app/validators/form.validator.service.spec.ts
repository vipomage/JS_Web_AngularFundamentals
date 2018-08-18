import { TestBed, inject } from '@angular/core/testing';

import { Form.ValidatorService } from './form.validator.service';

describe('Form.ValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Form.ValidatorService]
    });
  });

  it('should be created', inject([Form.ValidatorService], (service: Form.ValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
