import { CiscoSSHPage } from './app.po';

describe('cisco-ssh App', function() {
  let page: CiscoSSHPage;

  beforeEach(() => {
    page = new CiscoSSHPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cisco-ssh works!');
  });
});
