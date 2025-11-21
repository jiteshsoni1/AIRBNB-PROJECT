const express = require("express");
const router = express.Router();


//users
//index user
router.get("/", (req, res) => {
  res.send("GEt for users");
});

//show user
router.get("/:id", (req, res) => {
  res.send("GEt for user id");
});

//post user
router.post("/", (req, res) => {
  res.send("post for users");
});

//delet user
router.delete("/:id", (req, res) => {
  res.send("delete for user id");
});

module.exports = router;
