
/*
Write a function that takes a string as its input and returns a new string that contains all of the
letters in the original string, but in reverse alphabetical order. Ignore punctuation and numbers.
Test your function using the string ‘supercalifragilisticexpialidocious’
 */

const reverse = stringInput => stringInput.split("").reverse().join("");

module.exports = {reverse}