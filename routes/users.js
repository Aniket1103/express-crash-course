const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    console.log('This is User list');
    res.send("User List");
})

router.get("/new", (req, res) => {
    console.log("User new form")
    res.send("New user form")
})

module.exports = router;