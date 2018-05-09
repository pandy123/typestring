var StringBuffer = require('../build').StringBuffer
var expect = require('chai').expect
var stringbuffer = new StringBuffer()
describe('字符串添加测试', function() {
    it('添加一个字符', function() {
        stringbuffer.pushString('m')
        console.log(stringbuffer.toString())
    })
    it('添加一个字符数组', function() {
        stringbuffer.pushArray(['c', 'y'])
        console.log(stringbuffer.toString())
    })
    it('添加一行字符', function() {
        stringbuffer.pushLine('s', 'b')
        console.log(stringbuffer.toString())
    })
    it('字符清空', function() {
        stringbuffer.clear()
        console.log(stringbuffer.toString())
    })
    it('释放对象', function() {
        console.log(stringbuffer.toString())
    })
})