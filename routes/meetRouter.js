const router = require("express").Router();
const Controller = require("../controllers/meetCtrl");

router.post("/meetings/new", Controller.arrangeMeet);

router.get("/meetings/all", Controller.getAllMeets);

module.exports = router;
