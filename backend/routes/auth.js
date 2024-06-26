const authController = require("../controllers/authController");
const middlewareController = require("../controllers/middlewareController");

const router = require("express").Router();
//REGISTER
router.post("/register", authController.register);
//LOGIN
router.post("/login", authController.loginUser);
//REFRESH
router.post("/refresh", authController.requestRefreshToken);
//LOG OUT
router.post("/logout", middlewareController.verifyToken ,authController.userLogout);

module.exports = router;
