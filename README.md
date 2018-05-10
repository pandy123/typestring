Object Pool - Object pool library for Node.js and the browser 
============================================================
[![Build Status](https://travis-ci.org/BorisKozo/ObjectPool.png?branch=master)](https://travis-ci.org/BorisKozo/ObjectPool)

 The Object Pool mechanism allows you to consume object from a given
pool of objects instead of creating and disposing them. The main
use case for the object pool is to reduce the footprint of garbage 
collection for memory consuming applications. The main usage is probably for
games where objects are created and destroyed very quickly especially when
dealing with particles.

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
var StringBuffer = require('../build').StringBuffer
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
