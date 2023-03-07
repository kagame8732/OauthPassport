const express = require("express");

const router = express.Router();

//auth login
router.get("/login", (req, res) => {
  res.render("login");
});

//auth logout
router.get("/logout", (req, res) => {
  //Handle with passport
  res.send("logout");
});

//auth with google
router.get("/google", (req, res) => {
  //Handle with passport
  res.send("loggin with google");
});

module.exports = router;
