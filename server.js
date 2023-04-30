const express = require("express");
const app = express();

app.get('/', (req, res) => {
    console.log("Hello");

    // res.download('server.js');       //when the page loads server.js file gets downloaded
    res.json({message : "Hello World"});        //to send json object to client
    // res.status(500).send('Hi');
    // res.send('Hi');  //we donot use this method generally, it is usually used for testing purposes
})

app.listen(3000);