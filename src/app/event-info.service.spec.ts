import { TestBed } from '@angular/core/testing';

import { EventInfoService } from './event-info.service';

describe('EventInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventInfoService = TestBed.get(EventInfoService);
    expect(service).toBeTruthy();
  });
});
