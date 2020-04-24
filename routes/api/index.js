const router = require("express").Router();
const itemRoutes = require("./item");

// Book routes
router.use("/items", itemRoutes);

module.exports = router;
