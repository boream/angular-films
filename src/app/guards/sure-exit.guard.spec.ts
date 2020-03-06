import { TestBed, async, inject } from '@angular/core/testing';

import { SureExitGuard } from './sure-exit.guard';

describe('SureExitGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SureExitGuard]
    });
  });

  it('should ...', inject([SureExitGuard], (guard: SureExitGuard) => {
    expect(guard).toBeTruthy();
  }));
});
