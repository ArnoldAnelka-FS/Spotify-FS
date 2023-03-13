const Song = require("../models/show");

const router = require("express").Router();

router.get("/", async (req, res) => {
  return res.json("All shows")
});

module.exports = router;