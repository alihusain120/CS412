const util = require('util')

const doOperation = (value, decFunc) => decFunc(value);

const decoratedCall1 = doOperation(
    "supercalifragilisticexpialidocious",
    (value) => {
        let regForC = /c/g;
        let newStr = value.replace(regForC, ".c")
        return newStr.split(".")
    }
)

const decoratedCall2 = doOperation(
    "supercalifragilisticexpialidocious",
    (value) => {
        let regForA = /a/g;
        let numAs = value.match(regForA).length;
        let newStr = value.replace(regForA, "A");
        return toReturn = {
            originalString: value,
            modifiedString: newStr,
            numberReplaced: numAs,
            length: newStr.length
        }
    }
)

console.log(`${decoratedCall1}`);
console.table(decoratedCall2);

module.exports = {decoratedCall1, decoratedCall2}