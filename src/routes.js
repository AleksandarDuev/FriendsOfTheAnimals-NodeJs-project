const router = require("express").Router();
//TODO: add controller routes
const homeController = require("./controllers/homeController");
const userController = require("./controllers/userController");
const animalController = require("./controllers/animalController");

router.use("/", homeController);
router.use("/users", userController);
router.use("/animals", animalController);

router.use("*", (req, res) => {
    res.redirect("/404");
});

module.exports = router;
