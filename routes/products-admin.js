/*
Admin : can create , delete , update products
*/

const { Router } = require('express')
const router = Router()

// controllers 
const {addProduct} = require('../controllers/products-admin-controller')

// get methods
router.get('/admin/all-products' , () => {} )  // get all products 
router.get('/admin/product/:sku' , () => {} )  // get get a product by sku
router.get('/admin/product/id/:id' , () => {} )  // get a product by id 


// post methods
router.post('/admin/product/add-product' , addProduct )  // add a product

module.exports = router