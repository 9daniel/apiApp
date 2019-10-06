import { TestBed } from '@angular/core/testing';

import { UnknownService } from './unknown.service';

describe('UnknownService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnknownService = TestBed.get(UnknownService);
    expect(service).toBeTruthy();
  });
});
