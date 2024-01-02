const shoesController = require("../controllers/shoesController");
const router = require("express").Router();

//ADD SHOES
router.post("/", shoesController.addShoes);
//GET ALL SHOES
router.get("/", shoesController.getAllShoes);
//GET A PAIR OF SHOES
router.get("/:id", shoesController.getAPairOfShoes);
//UPDATE SHOES
router.put("/:id",shoesController.updateShoes);
//DELETE SHOES
router.delete("/:id",shoesController.deleteShoes)
module.exports = router;
