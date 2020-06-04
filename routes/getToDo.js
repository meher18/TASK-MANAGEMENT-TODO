const express = require("express");
const router = express.Router();

const toDoModel = require("../models/toDoSchema");

// this request gives the todos of the specfied username
router.get("/:username", (req, res, next) => {
  const todo_data = req.body;

  toDoModel
    .find({ user: req.params.username }, function (err, data) {
      if (err) {
        console.log(err);
        return;
      }
    })
    .sort({ priority: -1}) // descending order
    .sort({ updatedAt: -1}) // descending order
    .then((docs) => {
      res.send(docs);
      return docs;
    })
    .then((data) => {});
});

// gives the todo if the todo id matches
router.get("/:id", (req, res, next) => {
  const todo_id = req.params.id;
  toDoModel
    .findById({ _id: todo_id }, function (err, data) {
      if (err) {
        console.log(err);
        return;
      }
    })
    .sort({ updatedAt: -1 })
    .then((docs) => {
      res.send(docs);

      return docs;
    })
    .then((data) => {
      console.log(data, " of single todo");
    });
});

router.post("/", (req, res) => {
  res.sendStatus(403);
  res.end("not possible");
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
