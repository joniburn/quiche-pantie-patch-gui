import { TestBed } from '@angular/core/testing';

import { PantiesService } from './panties.service';

describe('PantiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PantiesService = TestBed.get(PantiesService);
    expect(service).toBeTruthy();
  });
});
