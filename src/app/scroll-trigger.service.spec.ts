import { TestBed } from '@angular/core/testing';

import { ScrollTriggerService } from './scroll-trigger.service';

describe('ScrollTriggerService', () => {
  let service: ScrollTriggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollTriggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
