const middlewareController = require("../controllers/middlewareController");
const userController = require("../controllers/userController");

const router = require("express").Router();

router.get("/", userController.getAllUser);
router.delete(
  "/:id",
  middlewareController.verifyTokenAndAdminAuth,
  userController.deleteUser
);
router.get("/:id", userController.getUser);
module.exports = router;
