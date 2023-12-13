const { Brand, Shoes } = require("../model/model");

const BrandController = {
  //ADD BRAND
  addBrand: async (req, res) => {
    try {
      const newBrand = new Brand(req.body);
      const saveBrand = await newBrand.save();
      res.status(200).json(saveBrand);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = BrandController;
