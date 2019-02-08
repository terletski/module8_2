
describe('basic test', () => {
  console.log('\nTest starts!\n');
  it('should check text of icon Accessibility', () => {
    const accessibility = $('~Accessibility');
    console.log(`${accessibility.getText()}`);
    expect(accessibility.getText()).toEqual('Accessibility', 'Incorrect text of icon');
  });
  it('should check text of icon Animation', () => {
    const animation = $('~Animation');
    console.log(`${animation.getText()}`);
    expect(animation.getText()).toEqual('Animation', 'Incorrect text of icon');
  });
  it('should check text of icon AudioFx', () => {
    const media = $('~Media');
    const audioFx = $('~AudioFx');
    media.click();
    console.log(`${audioFx.getText()}`);
    expect(audioFx.getText()).toEqual('AudioFx', 'Incorrect text of icon');
  });
  it('should check search result', () => {
    browser.back();
    const app = $('~App');
    const search = $('~Search');
    const searchResult = $('~Query Search Results');
    const queryString = $('~Query String: ');
    app.click();
    search.click();
    searchResult.click();
    console.log(`${queryString.isDisplayed()}`);
    expect(queryString.isDisplayed()).toBe(true, 'Query string is not displayed');
  });
  it('should check invoke search', () => {
    browser.back();
    const invokeSearch = $('~Invoke Search');
    const wayToInvokeSearch = $('~Ways to invoke search');
    invokeSearch.click();
    console.log(`${wayToInvokeSearch.isExisting()}`);
    expect(wayToInvokeSearch.isExisting()).toBe(true, 'Ways to invoke search are not exist');
    browser.closeApp();
  });
});
