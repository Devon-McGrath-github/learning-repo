const reverseString = require('./reverseString')

test('takes string returns it reversed', () => {
    expect(reverseString('test')).toBe('tset')
})

