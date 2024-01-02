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
  //GET ALL BRANDS
  getAllBrand: async (req, res) => {
    try {
      const brands = await Brand.find();
      res.status(200).json(brands);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //GET A BRAND
  getABrand: async (req, res) => {
    try {
      const brand = await Brand.findById(req.params.id).populate("shoes");
      res.status(200).json(brand);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //UPDATE A BRAND
  updateBrand: async (req, res) => {
    try {
      const brand = await Brand.findById(req.params.id);
      await brand.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //DELETE A BRAND
  deleteABrand: async (req, res) => {
    try {
      await Shoes.updateMany({ brand: req.params.id }, { brand: null });
      await Brand.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully!");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = BrandController;
