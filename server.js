const express = require("express");
const app = express();

app.use(express.static("public"));

//To parse the body from html POST form
app.use(express.urlencoded({ extended : true }));

//To parse the body from POST/FETCH calls
app.use(express.json());

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    console.log('app.get executing');

    res.render("index");
})

const userRouter = require("./routes/users");
app.use("/users", userRouter);

app.listen(3000);