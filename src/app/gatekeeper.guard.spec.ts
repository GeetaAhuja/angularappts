import { TestBed, async, inject } from '@angular/core/testing';

import { GatekeeperGuard } from './gatekeeper.guard';

describe('GatekeeperGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GatekeeperGuard]
    });
  });

  it('should ...', inject([GatekeeperGuard], (guard: GatekeeperGuard) => {
    expect(guard).toBeTruthy();
  }));
});
