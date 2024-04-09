const express = require('express')
require('dotenv').config()

const app = express()


// routes
const productsAdmin = require('./routes/products-admin')

// middleware
app.use(express.json())


// my libs
const conectDb = require('./db/conectdb')
const PORT = process.env.PORT || 3000
conectDb(() => app.listen(PORT, console.log(`server is running on port ${PORT} ...`)))

// test
app.get('/api/test' , (req , res , next ) => {
    res.status(200).json({"message" : "success"})
})

// routes 
app.use('/api', productsAdmin)


