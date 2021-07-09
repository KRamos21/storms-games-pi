const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("conta", {title: "Express"});
});

module.exports = router;