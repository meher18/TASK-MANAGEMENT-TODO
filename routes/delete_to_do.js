    const express = require("express");
    const router = express.Router();

    const modelSchema =require('../models/toDoSchema');

    router.get("/", (req, res) => {
    res.sendStatus(403);
    res.end("Sorry get operation cannot be performed");
    });

    // post is used to hide the user id in the headers , and to delete the specific user
    router.post("/:id", (req, res) => {
    const todo_data = req.body;
    modelSchema.remove({"_id":req.params.id},(err)=>{
        if(err)
        {
            console.log(err);
        }
    }).then((data)=>console.log(data));
    res.end("deleted");
    });

    
    router.patch("/", (req, res) => {
    res.sendStatus(403);
    res.end("sorry patch is not valid operation");
    });


    module.exports = router;
