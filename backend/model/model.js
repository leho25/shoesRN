const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  shoes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shoes",
    },
  ],
});

const shoesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  publishedDate: {
    type: String,
  },
  category: {
    type: [String],
  },
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Brand",
  },
});

let Shoes = mongoose.model("Shoes", shoesSchema);
let Brand = mongoose.model("Brand", brandSchema);
module.exports = { Shoes, Brand };
