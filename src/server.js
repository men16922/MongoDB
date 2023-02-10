const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const users = [];

const MONGO_URI =
  "mongodb+srv://men1692:qudals1004!@atlascluster.x25rhnu.mongodb.net/BlogService?retryWrites=true&w=majority";

const server = async () => {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology:true });
    console.log('mongodb connected');

    app.use(express.json());

    app.get("/user", function (req, res) {
      return res.send({ users: users });
    });

    app.post("/user", function (req, res) {
      console.log(req.body);
      users.push({ name: req.body.name, age: req.body.age });
      return res.send({ success: true });
    });

    app.listen(3000, function () {
      console.log("server listening on port 30000");
    });
  } catch (err) {
    console.log(err)
  }
};

server();
