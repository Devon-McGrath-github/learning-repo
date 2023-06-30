const capitalize = require('./capitalize.js')

test('takes \"test\" returns \"Test\"', () => {
    expect(capitalize('test')).toBe('Test')
})