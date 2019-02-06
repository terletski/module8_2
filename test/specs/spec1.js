
describe('check icons text', () => {
  console.log('\nTest1 starts!\n');
  browser.reloadSession();
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
});
