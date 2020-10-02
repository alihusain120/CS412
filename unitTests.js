const p1 = require('./PS1.P1');
const p2 = require('./PS1.P2');
const p3 = require('./PS1.P3');
const {describe, it} = require('mocha');
const {expect} = require('chai');

describe('Test for PR1', () => {

    it('Mary poppins word should be backwards', () => {
        let test = p1.reverse("supercalifragilisticexpialidocious");
        expect(test).to.be.equal("suoicodilaipxecitsiligarfilacrepus");
    })
})


describe('Tests for PR2', () => {

    it('should return 6 for 4+2', () => {
        const expression = "4+2";
        let operator = p2.evaluate(expression);
        let answer = operator(expression);
        expect(answer).to.be.equal(6);
    })

    it('should return 35 for 5*7', () => {
        const expression = "5*7";
        let operator = p2.evaluate(expression);
        let answer = operator(expression);
        expect(answer).to.be.equal(35);
    })

    it('should return 5 for 6-1', () => {
        const expression = "6-1";
        let operator = p2.evaluate(expression);
        let answer = operator(expression);
        expect(answer).to.be.equal(5);
    })

    it('should return 4.5 for 9/2', () => {
        const expression = "9/2";
        let operator = p2.evaluate(expression);
        let answer = operator(expression);
        expect(answer).to.be.equal(4.5);
    })

    it('should return 256 for 2^8', () => {
        const expression = "2^8";
        let operator = p2.evaluate(expression);
        let answer = operator(expression);
        expect(answer).to.be.equal(256);
    })

})

describe('Test for PR3', () => {

    it('Should return array of word, broken up at Cs', () => {
        let test = p3.decoratedCall1;
        expect(test).to.be.length(4);
    })

    it('Should have all properties', () => {
        let test = p3.decoratedCall2;
        expect(test).to.have.property('originalString');
        expect(test).to.have.property('modifiedString');
        expect(test).to.have.property('numberReplaced');
        expect(test).to.have.property('length');

        expect(test.numberReplaced).to.be.equal(3)
        expect(test.length).to.be.equal(34)

    })
})