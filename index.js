const express = require("express");
const mongoose = require("mongoose");

// setup express server

const app = express();

app.use(express.json());

app.listen(5000, () => console.log("Server started on port 5000"));

//set up routers

app.use("/snippet", require("./routers/snippetRouter"));

// app.get("/test", (req, res) => {
//     res.send("Hello 111 world!");
// })

// connect to mongoDB

mongoose.connect(
    "mongodb+srv://ujijmkiko:12121212q@snippet-manager.5fnmi.mongodb.net/mymain?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if(err) return console.error(err);
        console.log("Connected to MongoDB");
    });

// mongodb+srv://ujijmkiko:<password>@snippet-manager.5fnmi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority