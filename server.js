const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    console.log('app.get executing');

    res.render("index", {text : "World"});
})

app.get("/users", (req, res) => {
    console.log('This is User list');
    res.send("User List");
})

app.get("/users/new", (req, res) => {
    console.log("User new form")
    res.send("New user form")
})

app.listen(3000);