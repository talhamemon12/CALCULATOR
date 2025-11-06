// src/sum.test.js
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
expect(sum(2, 2)).toBe(4);
});

test("adds 0 + 0 to equal to 0", () => expect(sum(0+0).toBe(0)));