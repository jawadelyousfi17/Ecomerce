const express = require('express')
const cors = require('cors')
const path = require('path')
require('dotenv').config()

const app = express()

// Specify the directory to serve static files from
const publicDirectoryPath = path.join(__dirname);



// routes
const productsAdmin = require('./routes/products-admin')

// middleware
app.use(express.json())
app.use(cors())
app.use(express.static(publicDirectoryPath));


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











const dummyProds = async () => {
    const Product = require('./models/product')
    const Dummy = require('./dummy/dummy')
    const uid = require('./utils/uuid')
    images = []
    for (let index = 0; index < 5; index++) {
        images.push(Dummy.productsImage())
    }
    const product = new Product({ price : Dummy.number(10,599) , name: Dummy.productName(), description: Dummy.paragraph(3), sku: uid(6), images })
    await product.save()
}

console.log('begin')
for (let index = 0; index < 1000; index++) {
    dummyProds()
}
console.log('end')






