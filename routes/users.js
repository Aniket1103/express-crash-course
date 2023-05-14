const express = require("express");
const router = express.Router();

// router.use(logger);

router.get("/", logger, (req, res) => {
    console.log('This is User list');
    res.send("User List");
})

router.post("/", (req, res) => {
    let isValid = true;
    if(isValid){
        users.push({ firstName : req.body.firstName })
        res.redirect(`/users/${users.length - 1}`);
    }
    else {
        console.log("error");
        res.render("users/new.ejs", { firstName : req.body.firstName });
    }
})

router.get("/new", (req, res) => {
    console.log("User new form")
    res.render("users/new.ejs", { firstName : "DefaultValue" });
})

router
    .route("/:id")
    .get((req, res) => {
        console.log(req.user);
        res.send(`Get user with id : ${ req.params.id }`);
    })
    .put((req, res) => {
        res.send(`User with id : ${ req.params.id }`);
    })
    .delete((req, res) => {
        res.send(`Delete user with id : ${ req.params.id }`);
    })

const users = [{ name : "abc" }, { name : "xyz" }]
//below param method acts as a middleware
router.param("id", (req, res, next, id) => {
    req.user = users[id] || null;
    next();
})

function logger(req, res, next){
    console.log(req.originalUrl);
    next();
}


module.exports = router;