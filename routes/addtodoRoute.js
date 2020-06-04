    const express = require("express");
    const router = express.Router();

    const toDoModel = require("../models/toDoSchema");

    router.get("/", (req, res) => {
    res.sendStatus(403);
    res.end("Sorry get operation cannot be performed");
    });

    // add todo in the data base
    router.post("/", (req, res) => {
    const todo_data = req.body;
    toDoModel
        .create(todo_data)
        .then((docs) =>{
        // console.log(docs); 
        
           res.send("inserted");
        });
     
    });
     
    router.patch("/", (req, res) => {
    res.sendStatus(403);
    res.end("sorry patch is not valid operation");
    });

    router.delete("/", (req, res) => {
    res.sendStatus(403);
    res.end("delete operation cannot be performed");
    });

    module.exports = router;
