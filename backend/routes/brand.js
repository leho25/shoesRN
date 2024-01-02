const brandController = require("../controllers/brandController");
const { route } = require("./shoes");

const router = require("express").Router();

// ADD BRAND
router.post("/", brandController.addBrand);
// GET ALL BRANDS
router.get("/", brandController.getAllBrand);
// GET A BRAND
router.get("/:id", brandController.getABrand);
//UPDATE A BRAND
router.put("/:id", brandController.updateBrand);
//DELETE A BRAND
router.delete("/:id", brandController.deleteABrand);
module.exports = router;
