const express = require("express");
const router = express.Router();
//post
//index
router.get("/", (req, res) => {
  res.send("GEt for posts");
});

//show
router.get("/:id", (req, res) => {
  res.send("GEt for post id");
});

//post
router.post("/", (req, res) => {
  res.send("post for posts");
});

//delete
router.delete("/:id", (req, res) => {
  res.send("delete for post id");
});

module.exports = router;