const Bag = require('./Bag')

describe('Bag class', () => {
    //bag has weight
    test('bag has weight', () => {
        const bag = new Bag(25)
        expect(bag.weight).toBe(25)
    })
    //if bag has no weight, return error
    test('bag has no weight to return an error', () => {
        expect(() => new Bag()).toThrowError('bag needs weight')
    })

    test('bag exceeds max weight', () => {
        const bag = new Bag(25)
        expect(() => bag.checkWeight()).toThrowError('bag is too heavy')
    })

    test('bag is valid', () => {
        const bag = new Bag(22)
        expect(bag.checkWeight()).toBe("you're good")
    })
})