const fs = require('fs')


// Read file Asynchronously
// fs.readFile('amresh.text', 'utf8', (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data)
//     }
// })

// Read file Synchronously
// const result = fs.readFileSync('amresh.text', 'utf8')
// console.log(result)

// const content = "Hello world!";

// Sync.....
// const result = fs.writeFileSync('file.text', content, 'utf8')
// console.log(result)

// Async...
// fs.writeFile('file2.text', content, 'utf8', (err, result) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(result)
//     }
// })

const add = '\n This is append content to file'

// Async...
// fs.appendFile("file.text", add, 'utf8', (err) => {
//     if (err) {
//         console.log("Error while the file appending", err)
//     } else {
//         console.log('File appended')
//     }
// })

// Sync...
// const appendfile = fs.appendFileSync("file.text", `\n ${Date.now()} Nodejs Training`, 'utf8')
// console.log(appendfile)

// fs.unlink('file2.text', (err) => {
//     if (err) {
//         console.log('Error while unlinking file.text', err)
//     } else {
//         console.log('File deleted successfully')
//     }
// })

// creating a new directory file
// fs.mkdir('src', { recursive: true }, (err) => {
//     if (err) {
//         console.log('Error', err)
//     } else {
//         console.log('File directory created successfully')
//     }
// })

// fs.readdir('./src', (err, files) => {
//     if (err) {
//         console.log('Error', err)
//     } else {
//         console.log('File directory Reading', files)
//     }
// })

// single directory and empty files
// fs.rmdir('src', (err) => {
//     if (err) {
//         console.log('Error', err)
//     } else {
//         console.log("Deleted directory")
//     }
// })

// Multiple directories innner directory
// fs.rm('src', { recursive: true, force: true }, (err) => {
//     if (err) {
//         console.log('Error', err)
//     } else {
//         console.log("Deleted directory")
//     }
// })

// status file
// const data = fs.statSync('amresh.text', 'utf8')
// console.log(data)

// copyfile
// const result = fs.copyFile('amresh.text', 'harish.text')
// console.log(result)