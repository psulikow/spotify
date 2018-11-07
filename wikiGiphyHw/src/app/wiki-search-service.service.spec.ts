import { TestBed } from '@angular/core/testing';

import { WikiSearchServiceService } from './wiki-search-service.service';

describe('WikiSearchServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WikiSearchServiceService = TestBed.get(WikiSearchServiceService);
    expect(service).toBeTruthy();
  });
});
