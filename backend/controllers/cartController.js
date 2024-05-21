const Cart = require("../model/cart");
const { Shoes } = require("../model/model");

const cartController = {
  getUserCart: async (req, res) => {
    try {
      const cart = await Cart.findOne({ userId: req.params.userId }).populate(
        "product.productId"
      );

      res.status(200).json(cart);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  addToCart: async (req, res) => {
    try {
      const newCart = new Cart(req.body);
      const savedCart = await newCart.save();
      res.status(200).json(savedCart);
    } catch (error) {
      console.log("error", error);
    }
  },
  getAllUser: async (req, res) => {
    try {
      const carts = await Cart.find();
      res.status(200).json(carts);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = cartController;
