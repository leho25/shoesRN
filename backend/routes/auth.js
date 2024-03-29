const authController = require("../controllers/authController");

const router = require("express").Router();
//REGISTER
router.post("/register", authController.register);
//LOGIN
router.post("/login", authController.loginUser);
//REFRESH
router.post("/refresh",authController.requestRefreshToken);

module.exports = router;
