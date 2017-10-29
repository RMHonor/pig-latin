export const TRANSLATE_INPUT = 'translate_input';

export default function (string) {
  const words = string.split(/\s+/);

  const translation = words.reduce((acc, word) => `${acc}${pigLatin(word)} `, '').trim();

  return {
    type: TRANSLATE_INPUT,
    payload: {
      original: string,
      translation,
    }
  };
}

function pigLatin(word) {
  const vowelStart = /^[aeiou].*$/;

  if (word.match(vowelStart)){
    return word + 'way';
  } else {
    return word.substr(1) + word.charAt(0) + 'ay';
  }
}
