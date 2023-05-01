const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    console.log('This is User list');
    res.send("User List");
})

router.post("/", (req, res) => {
    res.send("Create User");
})

router.get("/new", (req, res) => {
    console.log("User new form")
    res.send("New user form")
})

router
    .route("/:id")
    .get((req, res) => {
        res.send(`Get user with id : ${ req.params.id }`);
    })
    .put((req, res) => {
        res.send(`User with id : ${ req.params.id }`);
    })
    .delete((req, res) => {
        res.send(`Delete user with id : ${ req.params.id }`);
    })


module.exports = router;