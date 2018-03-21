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
    it('extend.clone(object)', function () {
        var data = {
            user: {
                name: 'nimo',
                list: [
                    1,2,3
                ]
            }
        }
        var newData = extend.clone(data)
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
    it('extend.clone(array)', function () {
        var data = [
                {
                    name: 'nimo'
                },
                {
                    name: 'nico'
                }
            ]
        var newData = extend.clone(data)
        expect(newData).to.eql([
                {
                    name: 'nimo'
                },
                {
                    name: 'nico'
                }
            ])
        newData[0].name = 'change nimo'
        expect(newData).to.eql([
                {
                    name: 'change nimo'
                },
                {
                    name: 'nico'
                }
            ])
        expect(data).to.eql([
                {
                    name: 'nimo'
                },
                {
                    name: 'nico'
                }
            ])
    })
})
