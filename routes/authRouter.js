const router = require("express").Router();
const Controller = require("../controllers/authCtrl");

router.post("/users/new", Controller.register);

router.post("/refresh_token", Controller.generateAccessToken);
router.get("/users/all", Controller.getAllUsers);

module.exports = router;
