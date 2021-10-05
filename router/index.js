const MainController = require("../controller");

const router = require("express").Router();

router.get("/images", MainController.getImages);

module.exports = router;
