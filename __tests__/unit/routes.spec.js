const sum = require('../../src/sum');

describe('Sum', () => {
    it('Result of sum', () => {
        expect(sum(1, 2)).toBe(3);
    });
});