function toUpperCaseString(string) {
  return string.toUpperCase();
}

function firstLetter(string) {
  return string.charAt(0);
}

function concatStrings(string1, string2) {
  return `${string1} ${string2}`;
}

module.exports = {
  toUpperCaseString,
  firstLetter,
  concatStrings
}