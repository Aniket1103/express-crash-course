const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    console.log('This is User list');
    res.send("User List");
})

const users = [{ name : "John" }, { name : "abc" }]

router.get("/new", (req, res) => {
    console.log("User new form")
    res.send("New user form")
})

router.get("/:id", (req, res) => {
    res.send(`User with id : ${ req.params.id }, with name : ${ users[req.params.id].name }`);
})

module.exports = router;