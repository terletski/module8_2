
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
  it('should check search request', () => {
    browser.back();
    const invokeSearch = $('~Invoke Search');
    const prefillQuery = '#io.appium.android.apis:id/txt_query_prefill';
    const appData = '#io.appium.android.apis:id/txt_query_appdata';
    const onSearchRequested = $('~onSearchRequested()');
    const searchResult = $('#android:id/search_src_text');
    invokeSearch.click();
    browser.element('#io.appium.android.apis:id/txt_query_prefill').setValue('My request');
    browser.element('#io.appium.android.apis:id/txt_query_appdata').setValue('My request');
    onSearchRequested.click();
    console.log(`${searchResult.getText()}`);
    expect(searchResult.getText()).toContain('My request', 'Incorrect result of searching');
  });
});

// describe('checking', () => {
//   const app = $('~App');
//   console.log('\nTest2 starts!\n');
//   it('the button should be displayed', async () => {
//     const app = $('~App');
//     const menu = $('~Menu');
//     const inflate = $('~Inflate from XML');
//     app.click();
//     menu.click();
//     console.log(`${inflate.isDisplayed()}`);
//     expect(inflate.isDisplayed()).toBe(true, 'The button is not displayed');
//   });
// });

