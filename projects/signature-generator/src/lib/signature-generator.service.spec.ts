import { TestBed } from '@angular/core/testing';

import { SignatureGeneratorService } from './signature-generator.service';

describe('SignatureGeneratorService', () => {
  let service: SignatureGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignatureGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
