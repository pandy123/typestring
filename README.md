
## Installation
For Node.js 
````
npm install stringtypebuffer
````

## Documentation

This readme file contains basic usage examples and 
details on the full API, including methods, 
attributes and events.

## stringtypebuffer

stringtypebuffer is a class which allows you to arrange strings.

### Accessing the stringtypebuffer

In Node.js
```js
var StringBuffer = require('stringtypebuffer').StringBuffer
```


### Basic usage

```js
 var stringbuffer = new StringBuffer()
describe('字符串添加测试', function() {
    it('添加一个字符', function() {
        stringbuffer.pushString('mm')
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
```
