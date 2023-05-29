const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.query.search);
  res.status(200).send({ message: "hi" });
});

module.exports = router;
