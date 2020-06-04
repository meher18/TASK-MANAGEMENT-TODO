const express = require("express");
const router = express.Router();
const user = require("../models/userModel");

// to insert the data into the mongo
router.post("/", (req, res) => {
  const userdata = req.body;
  // console.log(userdata); // can see the data inserted in the console

  user.create(userdata).then((docs) => {
    console.log(docs);
  });
});

// this post request help to authenticate when the user logins
router.post("/authenticate", (req, res) => {
  const userdata = req.body;
  id = userdata.username;
  user.findOne({ username: id }, function (err, data) {
    // console.log(data, "after finding the user"); // can print the one todo
    if (data !== null) {
      if (userdata.userpassword === data.userpassword) {
        //   res.json({'status':'valid'});
        res.send("valid"); //if the password  match
      } else {
        res.send("invalid"); //if the password didnt  match
      }
    } else {
      res.send("enter correct username"); // if the username is invalid and not present in the db
    }
  });
});

module.exports = router;
