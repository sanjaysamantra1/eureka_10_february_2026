// Nodejs Code
// read data from file-1 and file-2 write both the content to file-3

const fs = require('fs');

fs.readFile('./file_1.txt', 'utf8', (err, file1Data) => {
    console.log(file1Data)
    fs.readFile('./file_2.txt', 'utf8', (err, file2Data) => {
        console.log(file2Data)
        fs.writeFile('./file_3.txt', `${file1Data}\n${file2Data}`, (err, response) => {
            console.log('data written successfully')
        })
    })
})

// callback hell