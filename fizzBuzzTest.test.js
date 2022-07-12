const test = require('jest-test')
const each = require('jest-each')
const { describe } = require('yargs')
const { exportAllDeclaration } = require('@babel/types')

describe('It will show number Fizz, Buzz or FizzBuzz', () => {
    
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
                [5, [1, 2, 'Fizz', 3, 4, 'Buzz']]
            ]
        ).test("", (num, expected) => {
            expect(fizzBuzz(num)).toBe(expected)
        })
    })
})
