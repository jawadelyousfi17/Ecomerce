/*
 Products schema 
*/

const mongoose = require('mongoose');
const { string } = require('../dummy/dummy');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true, // Enforce non-negative prices
  },
  sku: {
    type: String,
    unique: true, // Ensure unique Stock Keeping Units
    required: true,
  },
  images : {
    type : [String]
  } ,
//   categories: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'category', // Link to a separate Category model
//     required: true,
//   }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model('product', productSchema);
module.exports = Product;
