const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

//routers
const add_to_router = require("./routes/addtodoRoute");
const delete_router = require("./routes/delete_to_do");
const get_to_do_router = require("./routes/getToDo");
const update_status_of_todo = require("./routes/updateStatus");
const archive_todo = require("./routes/archiveTodo");
const input_user_data = require("./routes/userAutentication");

//database connections and operations  on the db named todo
mongoose
  .connect("mongodb://127.0.0.1:27017/todo", (err) => {
    //connects the mongodb , to connect please ensure that mongodb in running
    if (err) {
      console.log(err);
    }
  })
  .then(console.log("connected"));

const app = express();
app.listen(3500, () => {
  console.log("running at http://localhost:3500"); 
});

//cors helps to access different host or servers 
app.use(cors());
// parses the json in the body
app.use(bodyParser());

app.use("/api", add_to_router);
app.use("/api/delete", delete_router);
app.use("/api/getAll", get_to_do_router);
app.use("/api/updateStatus", update_status_of_todo);
app.use("/api/archiveTodo", archive_todo);
app.use("/api/user/input", input_user_data);
