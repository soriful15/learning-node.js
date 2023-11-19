const fs=require('fs')

// reading a file text 
// const readText=fs.readFileSync('./texts/read.txt') // kono kichu k porte chaile
const readText=fs.readFileSync('./texts/read.txt', 'utf-8') // kono kichu k porte chaile
// console.log(readText)



// writing a text
const writtenText=fs.writeFileSync('./texts/write.txt', readText + 'This is my written text') // kono kichu likhle onno file jaiya add hobe and nije theke file banabe
console.log(writtenText)