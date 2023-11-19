// local module

// const myDocument= require('./local-1')
// console.log(myDocument.add(2,3))



const {add,a}= require('./local-1')
const {add:add2,a:a2}= require('./local-2')


// console.log(add(2,3))
console.log(add2(2,3,4))
  

//2. built in module

const path=require('path')

// console.log(path.dirname('/E:/learning-node/index.js'))
// console.log(path.parse('/E:/learning-node/index.js'))
console.log(path.join('/E:/learning-node/index.js', "local-1"))