var expect = require('expect.js')
var extend = require('../index')
describe('extend()', function() {
    it('extend(target, value)', function () {
        var data = {
            user: {
                name: 'nimo',
                list: [
                    1,2,3
                ]
            }
        }
        var value = {
            nikename: 'nico',
            user: {
                age: 24
            }
        }
        var result = extend(data, value)
        expect(result).to.eql({ user: { age: 24 }, nikename: 'nico' })
        expect(data).to.eql({
            user: {
                name: 'nimo',
                list: [
                    1,2,3
                ]
            }
        })
        expect(value).to.eql({
            nikename: 'nico',
            user: {
                age: 24
            }
        })
    })
    it('extend(true, target, value)', function () {
        var data = {
            user: {
                name: 'nimo',
                list: [
                    1,2,3
                ]
            }
        }
        var value = {
            nikename: 'nico',
            user: {
                age: 24
            }
        }
        var result = extend(true, data, value)
        expect(result).to.eql({ user: { name: 'nimo', list: [ 1, 2, 3 ], age: 24 },
  nikename: 'nico' })
        expect(data).to.eql({
            user: {
                name: 'nimo',
                list: [
                    1,2,3
                ]
            }
        })
        expect(value).to.eql({
            nikename: 'nico',
            user: {
                age: 24
            }
        })
    })
    it('extend.deepCopy(data)', function () {
        var data = {
            user: {
                name: 'nimo',
                list: [
                    1,2,3
                ]
            }
        }
        var newData = extend.deepCopy(data)
        expect(newData).to.eql({
            user: {
                name: 'nimo',
                list: [
                    1,2,3
                ]
            }
        })
        newData.user.name = 'nico'
        expect(newData).to.eql({
            user: {
                name: 'nico',
                list: [
                    1,2,3
                ]
            }
        })
        expect(data).to.eql({
            user: {
                name: 'nimo',
                list: [
                    1,2,3
                ]
            }
        })
    })
})
