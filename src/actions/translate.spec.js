import translate from './translate';

describe('translate action', () => {
  it('should return an action of type `translate_input`', () => {
    const res = translate('test');

    expect(res.type).toEqual('translate_input');
  });

  it('should correctly translate a consonant starting word', () => {
    const res = translate('test');

    expect(res.payload.translation).toEqual('esttay');
  });

  it('should correctly translate a vowel starting word', () => {
    const res = translate('ello');

    expect(res.payload.translation).toEqual('elloway');
  });

  it('should translate a space separated set of words', () => {
    const res = translate('ello test');

    expect(res.payload.translation).toEqual('elloway esttay');
  });
});