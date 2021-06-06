import { TestBed } from '@angular/core/testing';

import { CartonService } from './carton.service';

describe('CartonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartonService = TestBed.get(CartonService);
    expect(service).toBeTruthy();
  });
});
