
describe('check icons text', () => {
    console.log('\nTest2 starts!\n');
    browser.reloadSession();
    it('the button should be displayed', async () => {
      const app = $('~App');
      const menu = $('~Menu');
      const inflate = $('~Inflate from XML');
      app.click();
      menu.click();
      console.log(`${inflate.isDisplayed()}`);
      expect(inflate.isDisplayed()).toBe(true, 'The button is not displayed');
    });
  });
  