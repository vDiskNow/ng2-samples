export class CiscoSSHPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cisco-ssh-app h1')).getText();
  }
}
