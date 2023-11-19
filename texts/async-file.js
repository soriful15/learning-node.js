const fs = require('fs')


// reading text asynchronously
fs.readFile('./texts/read.txt', 'utf-8', (err, data) => {
    if (err) {
        throw err('Error reading text')
    }
    // console.log(data)
    fs.writeFile('./texts/writeFile.txt', data,'utf-8', (err) => {
        if (err) {
            throw err('Error writing text')
        }
// console.log(data)
    })


    // console.log(data)
    console.log('ok ami shuvo')
})