// 1. Callbacks
// function fetchData(callback) {
//     setTimeout(() => {
//         callback("Data fetching")
//     }, 5000)
// }

// fetchData((data) => {
//     console.log(data)
// })

// Promises
// const fetchData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const success = false;
//         if (success) {
//             resolve('Data fetched successfully')
//         } else {
//             reject('Fetching failed')
//         }
//     }, 1000)
// })

// fetchData
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// Async/await

// async function fetchData() {
//     try {
//         const data = await new Promise((resolve, reject) => resolve("Data loaded successfully"))
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// fetchData()

// Chaining Promises

const promise = new Promise((resolve) => setTimeout(() => {
    resolve(2)

}, 1000))

promise
    .then((result) => result * 2)
    .then((result) => result + 2)
    .then(finalResult => console.log(finalResult))