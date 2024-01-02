const { Shoes, Brand } = require("../model/model");

const shoesController = {
  //ADD SHOES
  addShoes: async (req, res) => {
    try {
      const newAddShoes = new Shoes(req.body);
      const saveShoes = await newAddShoes.save();
      if (req.body.brand) {
        const brand = Brand.find({ _id: req.body.brand });
        await brand.updateOne({ $push: { shoes: saveShoes._id } });
      }
      res.status(200).json(saveShoes);
    } catch (error) {
      res.status(500).json(error);
      console.log(error);
    }
  },
  //GET ALL SHOES
  getAllShoes: async (req, res) => {
    try {
      const getAllShoes = await Shoes.find();
      res.status(200).json(getAllShoes);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // GET A PAIR OF SHOES
  getAPairOfShoes: async (req, res) => {
    try {
      const shoes = await Shoes.findById(req.params.id).populate("brand");
      res.status(200).json(shoes);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //UPDATE SHOES
  updateShoes: async (req, res) => {
    try {
      const shoes = await Shoes.findById(req.params.id);
      await shoes.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //DELETE SHOES
  deleteShoes: async (req, res) => {
    try {
      await Brand.updateMany(
        { shoes: req.params.id },
        { $pull: { shoes: req.params.id } }
      );
      await Shoes.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = shoesController;
