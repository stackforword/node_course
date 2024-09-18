const mongoose = require('mongoose')

const MongoDBConnection = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log(`MongoDB Database Connection Successfully ${db.connection.host}`)

    } catch (error) {
        console.log(`MongoDB Database Failed ${error}`)
    }
}

module.exports = MongoDBConnection;