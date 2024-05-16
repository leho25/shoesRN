const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  product: [
    {
      quality: {
        type: Number,
        required: true,
      },
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Shoes",
      },
    },
  ],
});

module.exports = mongoose.model("Cart", cartSchema);
