import { TestBed } from '@angular/core/testing';

import { IntershipDataService } from './intership-data.service';

describe('IntershipDataService', () => {
  let service: IntershipDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntershipDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
