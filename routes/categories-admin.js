/*
Admin : can create , delete , update categories
*/

const { Router } = require('express')
const router = Router()

// get methods
router.get('/admin/all-categories' , () => {} )  // get all products 
router.get('/admin/categorie/:name' , () => {} )  // get get a categorie by name
router.get('/admin/product/id/:id' , () => {} )  // get a product by id 


// post methods
router.post('/admin/add-category' , () => {})  // add a category

module.exports = router