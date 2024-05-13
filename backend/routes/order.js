const orderController = require("../controllers/orderController");

const router = require("express").Router();

router.post("/",orderController.addToCart);

module.exports = router;