import { TestBed } from '@angular/core/testing';

import { ReaddataService } from './readdata.service';

describe('ReaddataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReaddataService = TestBed.get(ReaddataService);
    expect(service).toBeTruthy();
  });
});
