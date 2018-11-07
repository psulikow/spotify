import { TestBed } from '@angular/core/testing';

import { GiphySearchServiceService } from './giphy-search-service.service';

describe('GiphySearchServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GiphySearchServiceService = TestBed.get(GiphySearchServiceService);
    expect(service).toBeTruthy();
  });
});
