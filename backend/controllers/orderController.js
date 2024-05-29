const User = require("../model/User");
const { Shoes } = require("../model/model");
const Order = require("../model/order");

const orderController = {
  addToCart: async (req, res) => {
    try {
      const { totalPrice, userId, cartsItem } = req.body;
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      //create an array of product objects from the cart Items
      const products = cartsItem.map((item) => ({
        quality: item.quality,
        productId: item.item._id,
      }));
      //create a new Order
      const order = await new Order({
        user: userId,
        product: products,
        totalPrice: totalPrice,
      });

      await order.save();
      res.status(200).json(order);
    } catch (error) {
      console.log("error creating orders", error);
    }
  },
  getAllOrder: async (req, res) => {
    try {
      const getAllOrder = await Order.find().populate("product.productId");
      res.status(200).json(getAllOrder);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = orderController;
