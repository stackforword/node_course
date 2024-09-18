const express = require('express')
const app = express()
const dotenv = require('dotenv')
const MongoDBDatabse = require('./src/config/DB')
const TodoRoutes = require('./src/routes/tode.route')

dotenv.config()
MongoDBDatabse()

// init Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT || 8080

// Get api
app.get('/', (req, res) => {
    res.send("Hi, Node JS")
})

// routes
app.use('/api/v1', TodoRoutes)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})