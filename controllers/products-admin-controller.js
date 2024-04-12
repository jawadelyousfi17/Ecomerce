const Product = require('../models/product')


// libs
const productCheck = require('../utils/product-validator')

/// add a product to db
/// each product has name , description , price , sku (unique id ) , categories 
const addProduct = async (req, res) => {
    const { name, description, sku, price } = req.body
    const product = new Product({ name, description, sku, price })
    try {
        const isValidProduct = productCheck(name, description, sku)
        await product.save()
        res.status(200).json({ "success": "yes" })
    } catch (error) {
        if (error.code) {
            if (error.code === 11000) {
                res.json({ "success": "no", "errors": `sku ${sku} must be unique ` })
            }
        }
        if (error.type == "validator") res.json({ "sucess": "no" , "errors" : error })
    }
}


const getAllProducts = async (req , res) => {
    try {
        const products = await Product.find().limit(100)
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({error : ""})
    }
}


// exports
module.exports = { addProduct , getAllProducts }