const each = require('jest-each').default
const fizzBuzz = require('./fizzBuzz.js')

describe('It will show a number, Fizz, Buzz or FizzBuzz', () => {
    
    test('It is a function', () => {
        expect(typeof fizzBuzz).toBe('function')
    })

    describe('It reports invalid input', () => {
        test('It throws an error if input is not a number', () => {
            expect(() => {
                fizzBuzz('this here is a string')
            }).toThrow('Error: please enter a positive integer')
        })
    })
    describe('It handles normal input successfully', () => {
        each(
            [
                [5, [1, 2, 'Fizz', 4, 'Buzz']],
                [16, [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16]]
            ]
        ).test("", (num, expected) => {
            expect(fizzBuzz(num)).toEqual(expected)
        })
    })
})
