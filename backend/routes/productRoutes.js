const express = require("express");
const router = express.Router();
const { createProduct, getProducts } = require("../controllers/productController");
const { protect } = require("../middleware/authMiddleware");
const { admin } = require("../middleware/adminMiddleware");

// Public route
router.get("/", getProducts);

// 🔐 Admin-only route
router.post("/", protect, admin, createProduct);

module.exports = router;
