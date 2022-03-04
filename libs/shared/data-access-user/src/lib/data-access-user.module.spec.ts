import { async, TestBed } from '@angular/core/testing';
import { DataAccessUserModule } from './data-access-user.module';

describe('DataAccessUserModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DataAccessUserModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(DataAccessUserModule).toBeDefined();
  });
});
