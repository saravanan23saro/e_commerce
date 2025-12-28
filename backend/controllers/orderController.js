const Order = require("../models/Order");
const Cart = require("../models/Cart");

// CREATE ORDER (Checkout)
const createOrder = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const order = new Order({
      user: req.user._id,
      orderItems: cart.items,
      shippingAddress: req.body.shippingAddress,
      paymentMethod: req.body.paymentMethod,
      totalPrice: req.body.totalPrice,
    });

    const createdOrder = await order.save();

    // Clear cart after order
    cart.items = [];
    await cart.save();

    res.status(201).json(createdOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET MY ORDERS
const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = { createOrder, getMyOrders };
