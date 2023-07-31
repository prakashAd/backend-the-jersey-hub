const express = require("express");
const { addCategory } = require("../controller/categoryController.js");

const router = express.Router();

router.post("/addcategory", addCategory);

module.exports = router;
