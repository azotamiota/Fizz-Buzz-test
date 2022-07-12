// const test = require('jest')
const each = require('jest-each').default
// const { describe } = require('yargs')
// const { exportAllDeclaration } = require('@babel/types')
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
                [5, [1, 2, 'Fizz', 4, 'Buzz']]
            ]
        ).test("", (num, expected) => {
            expect(fizzBuzz(num)).toEqual(expected)
        })
    })
})
