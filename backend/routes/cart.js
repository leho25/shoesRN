const cartController = require("../controllers/cartController");
const middlewareController = require("../controllers/middlewareController");

const router = require("express").Router();

router.get("/:userId", cartController.getUserCart);
router.get("/", cartController.getAllUser);
router.post("/", cartController.addToCart);

module.exports = router;
