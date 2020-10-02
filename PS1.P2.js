
/*
This function should
Determine the operator (+, *, -, ^, or /) embedded in the string
Return a function to implement the input operator that returns the result
 */

const evaluate = expres => {
    //let left = expres.charAt(0);
    let op = expres.charAt(1);
    //let right = expres.charAt(2);
    switch (op) {
        case '+':
            return (exp) => parseInt(exp.charAt(0)) + parseInt(exp.charAt(2));
        case '-':
            return (exp) => parseInt(exp.charAt(0)) - parseInt(exp.charAt(2));
        case '*':
            return (exp) => parseInt(exp.charAt(0)) * parseInt(exp.charAt(2));
        case '/':
            return (exp) => parseInt(exp.charAt(0)) / parseInt(exp.charAt(2));
        case '^':
            return (exp) => parseInt(exp.charAt(0)) ** parseInt(exp.charAt(2));
        case '%':
            return (exp) => parseInt(exp.charAt(0)) % parseInt(exp.charAt(2));
        default:
            return "Error, operator not valid";
    }
}

module.exports = {evaluate}