const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("conta");
});

module.exports = router;