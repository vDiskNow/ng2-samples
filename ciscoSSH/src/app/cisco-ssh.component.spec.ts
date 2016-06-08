import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { CiscoSSHAppComponent } from '../app/cisco-ssh.component';

beforeEachProviders(() => [CiscoSSHAppComponent]);

describe('App: CiscoSSH', () => {
  it('should create the app',
      inject([CiscoSSHAppComponent], (app: CiscoSSHAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'cisco-ssh works!\'',
      inject([CiscoSSHAppComponent], (app: CiscoSSHAppComponent) => {
    expect(app.title).toEqual('cisco-ssh works!');
  }));
});
