const BrandController = require("../controllers/brandController");

const router = require("express").Router();

// ADD BRAND
router.post("/",BrandController.addBrand);


module.exports = router;