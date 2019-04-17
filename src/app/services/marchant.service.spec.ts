import { TestBed } from '@angular/core/testing';

import { MarchantService } from './marchant.service';

describe('MarchantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarchantService = TestBed.get(MarchantService);
    expect(service).toBeTruthy();
  });
});
