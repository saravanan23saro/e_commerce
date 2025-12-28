const Product = require("../models/Product");

// CREATE PRODUCT (Admin)
const createProduct = async (req, res) => {
  try {
    const product = new Product({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      image: req.body.image,
      category: req.body.category,
      countInStock: req.body.countInStock,
      user: req.user._id, // logged-in user
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL PRODUCTS (Public)
const getProducts = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

module.exports = { createProduct, getProducts };
