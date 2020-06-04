const express = require("express");
const router = express.Router();

const toDoModel = require("../models/toDoSchema");

router.get("/", (req, res, next) => {
  res.sendStatus(403);
  res.end("sorry! this operation is prohibited");
});

router.post("/", (req, res) => {
  res.sendStatus(403);
  res.end("not possible");
});

//this operation is used to update the status like new , inprogress,completed of the todo
router.patch("/", (req, res) => {
  const json = req.body;
  toDoModel
    .updateOne(
      { _id: json.id },
      { $set: { status: json.status } }, // $set helps to update the specified field
      null,
      (err, raw) => {
        if (err) {
          console.log(err);
          return;
        }
        // console.log(raw); // prints the updated data
      }
    )
    .then((docs) =>
      toDoModel.findById({ _id: json.id }, function (err, res) {
        //console.log(res)
      })
    );
});

router.delete("/", (req, res) => {
  res.sendStatus(403);
  res.end("delete operation cannot be performed");
});

module.exports = router;
