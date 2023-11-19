const EventEmitter=require("events")
const  myEmitter= new EventEmitter();

// listener
myEmitter.on('birthday',()=>{
    console.log(`Happy Birthday To You`)
})
// myEmitter.emit('birthday')
myEmitter.on('birthday',()=>{
    console.log(`I will send a gift`)
})
// myEmitter.emit('birthday') // ak sathe 2 ta dekhabe upor ta o nicher ta o
myEmitter.on('birthday',(param1, param2)=>{
    console.log(`I will send a gift ${param1} + ${param2}`)
})
// myEmitter.emit('birthday', 'condom', 'pill') //ak sathe 3 ta dekhabe upor ta o nicher ta o

myEmitter.on('birthday',(...param)=>{
    const parameters=param.join(', ')
    console.log(`I will send a gift ${parameters}`)
})
myEmitter.emit('birthday', 'condom', 'pill','bra') ////ak sathe 4 ta dekhabe upor ta o nicher ta o