const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true, // Ensure unique category names
  },
  description: {
    type: String,
  },
  image: {
    type: String, // Store image URL or file path
  },
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category', // Self-referential for subcategories
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Category = mongoose.model('category', categorySchema);
module.exports = Category;
