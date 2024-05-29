const orderController = require("../controllers/orderController");

const router = require("express").Router();

router.post("/", orderController.addToCart);
router.get("/", orderController.getAllOrder);

module.exports = router;
