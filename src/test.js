const math = require('./main.js');

test('add 1 + 2 to equal 3', () => {
    expect(math.add(1,2)).toBe(3);
});